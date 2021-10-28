import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalFormMonedaComponent } from './modal-form-moneda/modal-form-moneda.component';
import { Moneda } from './moneda.interface';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css'],
})
export class MonedaComponent implements OnInit {
  position!: Moneda;
  nzModalref = NzModalRef;

  listOfData: Moneda[] = [
    {
      id: 1,
      simbolo: 'S/.',
      descripcion: 'Sol',
    },
    {
      id: 2,
      simbolo: '$',
      descripcion: 'Dolares Americanos',
    },
    {
      id: 2,
      simbolo: '€',
      descripcion: 'Euro',
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
    position: Moneda,
    formMode: string,
    isAddNew: boolean
  ) {
    const nzModalref = this.modal.create({
      nzTitle: 'MANTENIMIENTO DE MONEDAS',
      nzContent: ModalFormMonedaComponent,
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
