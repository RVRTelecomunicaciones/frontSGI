import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { InvolucradoJuridicoUseCase } from '../../application/involucrado-juridico.usecase';
import { InvolucradoJuridicoModel } from '../../domain/involucrado-juridico.model';
import { ModalFormInvolucradoJuridicoComponent } from '../involucrado-juridico-add/involucrado-juridico-add.component';

@Component({
  selector: 'app-involucrado-juridico-list',
  templateUrl: './involucrado-juridico-list.component.html',
  styleUrls: ['./involucrado-juridico-list.component.css'],
})
export class InvolucradoJuridicoListComponent implements OnInit {
  pageIndex: number = 1;
  total: number = 1;
  pageSize = 10;
  loading = true;
  listOfInvolucrados: InvolucradoJuridicoModel[] = [];
  position!: InvolucradoJuridicoModel;
  ModalRef?: NzModalRef;
  newPageIndex!: number;
  newPageSize!: number;

  constructor(
    private useCase: InvolucradoJuridicoUseCase,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.getByPageInvolucrados(this.pageIndex, this.pageSize);
  }

  getByPageInvolucrados(page_index: number, page_size: number) {
    this.loading = true;

    this.useCase.getByPageList(page_index, page_size).subscribe((data: any) => {
      this.loading = false;
      this.total = data.meta.itemCount;
      this.listOfInvolucrados = [...data.data];
    });
  }

  onQueryParamsChange(params: NzTableQueryParams) {
    const { pageSize, pageIndex } = params;
    this.newPageIndex = params.pageIndex;
    this.getByPageInvolucrados(pageIndex, pageSize);
  }

  openModalWithComponent(
    position: InvolucradoJuridicoModel,
    formMode: string,
    isAddNew: boolean
  ) {
    const nzModalref = this.modal.create({
      nzTitle: 'MANTENIMIENTO DE INVOLUCRADOS',
      nzContent: ModalFormInvolucradoJuridicoComponent,
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

      if (res) {
        if (res.crudType == 'u') {
          if (res.status) {
            this.displayToaster('success', 'Confirmation', res.message);
          }
        }

        if (res.crudType == 'c') {
          if (res.status) {
            this.getByPageInvolucrados(this.pageIndex, this.pageSize);
            this.displayToaster('success', 'Confirmation', res.message);
          }
        }

        if (res.crudType == '') {
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
            this.getByPageInvolucrados(this.pageIndex, this.pageSize);
          });
        }).catch(() => console.log('Error')),
    });
  }
}
