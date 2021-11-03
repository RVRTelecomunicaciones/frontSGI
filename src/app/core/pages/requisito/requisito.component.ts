import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalFormRequisitoComponent } from './modal-form-requisito/modal-form-requisito.component';
import { Requisito } from './requisito.interface';

@Component({
  selector: 'app-requisito',
  templateUrl: './requisito.component.html',
  styleUrls: ['./requisito.component.css'],
})
export class RequisitoComponent implements OnInit {
  position!: Requisito;
  nzModalref = NzModalRef;

  listOfData: Requisito[] = [
    {
      id: 1,
      descripcion: 'REQUISITO 1',
    },
    {
      id: 2,
      descripcion: 'REQUISITO 2',
    },
    {
      id: 3,
      descripcion: 'REQUISITO 3',
    },
    {
      id: 4,
      descripcion: 'REQUISITO 4',
    },
    {
      id: 5,
      descripcion: 'REQUISITO 5',
    },
  ];
  listOfDisplayData = [...this.listOfData];

  constructor(private modal: NzModalService) {}

  ngOnInit(): void {
    this.addRow();
  }

  addRow(): void {
    if (this.listOfData === undefined) {
      return;
    }
    this.listOfData = [...this.listOfData];
  }

  openModalWithComponent(
    position: Requisito,
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

    /*  nzModalref.result
      .then((result: FormResult) => {
        if (result === undefined) {
          return;
        }
        console.log(result);
        if (result.crudType === 'u') {
          if (result.status) {
            // toaster for CRUD\Update
            console.log('Actualizo Correctamente');
          }
        }
        if (result.crudType == 'c') {
          if (result.status) {
            this.addRow();
            // toaster for CRUD\Create
          }
        }
      })
      .catch(() => {
        // user click outside of the modal form
      }); */

    nzModalref.afterClose.subscribe((res) => {
      if (res === undefined) {
        return;
      }
      this.listOfData.push(res.data.value);
      this.addRow();
    });
  }
}
