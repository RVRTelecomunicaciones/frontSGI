import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Area } from './area.interface';
import { ModalFormAreaComponent } from './modal-form-area/modal-form-area.component';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  position!: Area;
  nzModalref = NzModalRef;

  listOfData: Area[] = [
    {
      id: 1,
      descripcion: 'GERENCIA',
    },
    {
      id: 2,
      descripcion: 'AUDITORIA',
    },
    {
      id: 3,
      descripcion: 'COMERCIAL',
    },
    {
      id: 4,
      descripcion: 'OPERACIONES',
    },
    {
      id: 5,
      descripcion: 'SISTEMAS',
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

  openModalWithComponent(position: Area, formMode: string, isAddNew: boolean) {
    const nzModalref = this.modal.create({
      nzTitle: 'MANTENIMIENTO DE AREAS',
      nzContent: ModalFormAreaComponent,
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
