import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { AreaRepository } from '../../application/area.repository';
import { AreaUseCase } from '../../application/area.usecase';
import { AreaModel } from '../../domain/area.model';
import { ModalFormAreaComponent } from '../area-add/area-add.component';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css'],
})
export class AreaListComponent implements OnInit {
  listOfAreas: AreaModel[] = [];
  pageIndex: number = 1;
  total: number = 1;
  pageSize = 10;
  loading = true;
  position!: AreaModel;
  ModalRef?: NzModalRef;
  newPageIndex!: number;
  newPageSize!: number;

  constructor(
    private areUseCase: AreaUseCase,
    private modal: NzModalService,
    private notification: NzNotificationService
  ) {}

  getByPageAreas(page_index: number, page_size: number) {
    this.loading = true;

    this.areUseCase
      .getByPageList(page_index, page_size)
      .subscribe((data: any) => {
        console.log(data);
        this.loading = false;
        this.total = data.meta.itemCount;
        this.listOfAreas = data.data;
      });
  }
  ngOnInit(): void {
    this.getByPageAreas(this.pageIndex, this.pageSize);
  }

  onQueryParamsChange(params: NzTableQueryParams) {
    const { pageSize, pageIndex } = params;
    this.newPageIndex = params.pageIndex;
    this.getByPageAreas(pageIndex, pageSize);
  }

  openModalWithComponent(
    position: AreaModel,
    formMode: string,
    isAddNew: boolean
  ) {
    const nzModalref = this.modal.create({
      nzTitle: 'MANTENIMIENTO DE AREAS',
      nzContent: ModalFormAreaComponent,
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
  //refresh page after delete or create

  /*  delete(value: any) {
    console.log(value);
    this.showConfirm();
  } */

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
          this.areUseCase.delete(idData).subscribe((data: any) => {
            resolve(data);
            console.log(data);
            if (data.status === 200) {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              this.displayToaster('success', 'Confirmation', data.body);
            }
            this.getByPageAreas(this.pageIndex, this.pageSize);
          });
        }).catch(() => console.log('Error')),
    });
  }
  refreshPage() {
    window.location.reload();
  }
}

/* "meta": {
  "page": 1,
  "take": 10,
  "itemCount": 12,
  "pageCount": 2,
  "hasPreviousPage": true,
  "hasNextPage": false

  http://localhost:8080/areas/list?order=ASC&page=1&take=10

} */
