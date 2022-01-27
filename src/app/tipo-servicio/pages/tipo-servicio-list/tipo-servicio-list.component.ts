import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { TipoServicioUseCase } from '../../application/tipo-servicio.usecase';
import { TipoServicioModel } from '../../domain/tipo-servicio.model';
import { ModalFormTipoServicioComponent } from '../tipo-servicio-add/tipo-servicio-add.component';

@Component({
  selector: 'app-tipo-servicio-list',
  templateUrl: './tipo-servicio-list.component.html',
  styleUrls: ['./tipo-servicio-list.component.css'],
})
export class TipoServicioListComponent implements OnInit {
  listOfTipoServicios: TipoServicioModel[] = [];
  pageIndex: number = 1;
  total: number = 1;
  pageSize = 10;
  loading = true;
  position!: TipoServicioModel;
  ModalRef?: NzModalRef;
  newPageIndex!: number;
  newPageSize!: number;

  constructor(
    private useCase: TipoServicioUseCase,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) {}

  getByPageTipoServicios(page_index: number, page_size: number) {
    this.loading = true;

    this.useCase.getByPageList(page_index, page_size).subscribe((data: any) => {
      console.log(data);
      this.loading = false;
      this.total = data.meta.itemCount;
      this.listOfTipoServicios = data.data;
    });
  }

  ngOnInit(): void {
    this.getByPageTipoServicios(this.pageIndex, this.pageSize);
  }

  onQueryParamsChange(params: NzTableQueryParams) {
    const { pageSize, pageIndex } = params;
    this.newPageIndex = params.pageIndex;
    this.getByPageTipoServicios(pageIndex, pageSize);
  }

  openModalWithComponent(
    position: TipoServicioModel,
    formMode: string,
    isAddNew: boolean
  ) {
    const nzModalref = this.modal.create({
      nzTitle: 'MANTENIMIENTO DE TIPO DE SERVICIOS',
      nzContent: ModalFormTipoServicioComponent,
      nzMaskClosable: false,
      nzClosable: false,
    });

    nzModalref.componentInstance!.position = position;
    nzModalref.componentInstance!.formMode = formMode;
    nzModalref.componentInstance!.isAddNew = isAddNew;

    nzModalref.result?.then((res: FormResult) => {
      if (res === undefined) {
        return;
      }
      console.log('Mi res');
      console.log(res);
      if (res) {
        console.log(res);

        if (res.crudType == 'u') {
          if (res.status) {
            // toaster for CRUD\Update
            this.displayToaster('success', 'Confirmation', 'Data is updated');
          }
        }
        if (res.crudType == 'd') {
          if (res.status) {
            this.refreshPage();
            // toaster for CRUD\Delete
            this.displayToaster('success', 'Confirmation', 'Data is deleted');
          }
        }
        if (res.crudType == 'c') {
          if (res.status) {
            this.refreshPage();
            // toaster for CRUD\Create
            this.displayToaster('success', 'Confirmation', 'Data is saved');
          }
        }
        if (res.crudType == '') {
          // toaster for cancel
          this.displayToaster('success', 'Confirmation', 'Form is cancel');
        }
      }
    });

    nzModalref.afterClose.subscribe((res) => {
      if (res === undefined) {
        return;
      }
      console.log('Mi res');
      console.log(res);
      if (res) {
        console.log(res);

        if (res.crudType == 'u') {
          if (res.status) {
            // toaster for CRUD\Update
            this.displayToaster('success', 'Confirmation', 'Data is updated');
          }
        }
        if (res.crudType == 'd') {
          if (res.status) {
            //this.refreshPage();
            // toaster for CRUD\Delete
            this.displayToaster('success', 'Confirmation', 'Data is deleted');
          }
        }
        if (res.crudType == 'c') {
          if (res.status) {
            /*  this.refreshPage(); */
            // toaster for CRUD\Create
            this.displayToaster('success', 'Confirmation', 'Data is saved');
          }
        }
        if (res.crudType == '') {
          // toaster for cancel
          this.displayToaster('success', 'Confirmation', 'Form is cancel');
        }
      }
    });
  }

  displayToaster(type: string, headerText: string, bodyText: string) {
    this.notification.create(type, headerText, bodyText);
  }

  showConfirm(idData: number): void {
    this.ModalRef = this.modal.confirm({
      nzTitle: '¿Desea eliminar este elemento?',
      nzContent:
        'Si presiona OK, se eliminara el elemento, espere 1 segundo a que se cierre',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          this.useCase.delete(idData).subscribe((data: any) => {
            resolve(data);
            if (data.status === 200) {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              this.displayToaster(
                'success',
                'Confirmation',
                'Se borro correctamente'
              );
            }
            this.getByPageTipoServicios(this.pageIndex, this.pageSize);
          });
        }).catch(() => console.log('Error')),
    });
  }

  refreshPage() {
    window.location.reload();
  }
}
