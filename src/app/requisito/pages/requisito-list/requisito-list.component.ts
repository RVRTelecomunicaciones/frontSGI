import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { RequisitoUseCase } from '../../application/requisito.usecase';
import { RequisitoModel } from '../../domain/requisito.model';
import { ModalFormRequisitoComponent } from '../requisito-add/requisito-add.component';

@Component({
  selector: 'app-requisito-list',
  templateUrl: './requisito-list.component.html',
  styleUrls: ['./requisito-list.component.css'],
})
export class RequisitoListComponent implements OnInit {
  listOfRequisitos: RequisitoModel[] = [];
  pageIndex: number = 1;
  total: number = 1;
  pageSize = 10;
  loading = true;
  position!: RequisitoModel;
  ModalRef?: NzModalRef;
  newPageIndex!: number;
  newPageSize!: number;

  constructor(
    private useCase: RequisitoUseCase,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) {}

  getByPageRequisitos(page_index: number, page_size: number) {
    this.loading = true;

    this.useCase.getByPageList(page_index, page_size).subscribe((data: any) => {
      console.log(data);
      this.loading = false;
      this.total = data.meta.itemCount;
      this.listOfRequisitos = data.data;
    });
  }

  ngOnInit(): void {
    this.getByPageRequisitos(this.pageIndex, this.pageSize);
  }

  onQueryParamsChange(params: NzTableQueryParams) {
    const { pageSize, pageIndex } = params;
    this.newPageIndex = params.pageIndex;
    this.getByPageRequisitos(pageIndex, pageSize);
  }

  openModalWithComponent(
    position: RequisitoModel,
    formMode: string,
    isAddNew: boolean
  ) {
    const nzModalref = this.modal.create({
      nzTitle: 'MANTENIMIENTO DE REQUISITOS',
      nzContent: ModalFormRequisitoComponent,
      nzMaskClosable: false,
      nzClosable: false,
    });

    nzModalref.componentInstance!.position = position;
    nzModalref.componentInstance!.formMode = formMode;
    nzModalref.componentInstance!.isAddNew = isAddNew;

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

        if (res.crudType == 'c') {
          if (res.status) {
            this.getByPageRequisitos(this.pageIndex, this.pageSize);
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
            this.getByPageRequisitos(this.pageIndex, this.pageSize);
          });
        }).catch(() => console.log('Error')),
    });
  }

  refreshPage() {
    window.location.reload();
  }
}
