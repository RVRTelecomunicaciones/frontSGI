import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Desglose } from './desglose.interface';
import { ModalFormDesgloseComponent } from './modal-form-desglose/modal-form-desglose.component';

@Component({
  selector: 'app-desglose',
  templateUrl: './desglose.component.html',
  styleUrls: ['./desglose.component.css'],
})
export class DesgloseComponent implements OnInit {
  position!: Desglose;
  nzModalref = NzModalRef;

  listOfData: Desglose[] = [
    {
      id: 1,
      descripcion: '100%',
    },
    {
      id: 2,
      descripcion: '50% - 50%',
    },
    {
      id: 3,
      descripcion: '50% - 30% - 20%',
    },
    {
      id: 4,
      descripcion: '40% - 30% - 30%',
    },
    {
      id: 5,
      descripcion: '30 Días',
    },
    {
      id: 6,
      descripcion: '60 Días',
    },
    {
      id: 7,
      descripcion: 'Al Finalizar',
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
    position: Desglose,
    formMode: string,
    isAddNew: boolean
  ) {
    const nzModalref = this.modal.create({
      nzTitle: 'MANTENIMIENTO DE DESGLOSE',
      nzContent: ModalFormDesgloseComponent,
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
