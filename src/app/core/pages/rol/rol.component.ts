import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalFormRolComponent } from './modal-form-rol/modal-form-rol.component';
import { Rol } from './rol.interface';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
})
export class RolComponent implements OnInit {
  position!: Rol;
  nzModalref = NzModalRef;

  listOfData: Rol[] = [
    {
      id: 1,
      descripcion: 'GERENTE',
    },
    {
      id: 2,
      descripcion: 'SUB GERENTE',
    },
    {
      id: 3,
      descripcion: 'JEFE',
    },
    {
      id: 4,
      descripcion: 'COORDINADOR',
    },
    {
      id: 5,
      descripcion: 'VENDEDOR',
    },
    {
      id: 6,
      descripcion: 'PERITO',
    },
    {
      id: 7,
      descripcion: 'ASISTENTE',
    },
    {
      id: 8,
      descripcion: 'PRACTICANTE',
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

  openModalWithComponent(position: Rol, formMode: string, isAddNew: boolean) {
    const nzModalref = this.modal.create({
      nzTitle: 'MANTENIMIENTO DE ROLES',
      nzContent: ModalFormRolComponent,
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
