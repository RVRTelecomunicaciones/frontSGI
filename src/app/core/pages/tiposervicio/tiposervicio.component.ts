import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ModalFormTipoServicioComponent } from './modal-form-tipo-servicio/modal-form-tipo-servicio.component';
import { Tiposervicio } from './tiposervicio.interface';
@Component({
  selector: 'app-tiposervicio',
  templateUrl: './tiposervicio.component.html',
  styleUrls: ['./tiposervicio.component.css'],
})
export class TiposervicioComponent implements OnInit {
  position!: Tiposervicio;
  nzModalref = NzModalRef;

  listOfData: Tiposervicio[] = [
    {
      id: 1,
      descripcion: 'ANALISIS DE ACTIVOS',
    },
    {
      id: 2,
      descripcion: 'CATALOGACIÓN DE MATERIALES',
    },
    {
      id: 3,
      descripcion: 'ESTUDIO TECNICO DE MERMAS',
    },
    {
      id: 4,
      descripcion: 'INFORME PERICIAL',
    },
    {
      id: 5,
      descripcion: 'INVENTARIO Y CONCILIACIÓN',
    },
    {
      id: 6,
      descripcion: 'PROYECTOS',
    },
    {
      id: 7,
      descripcion: 'VALUACION DE BIENES MUEBLES',
    },
    {
      id: 8,
      descripcion: 'VALUACION DE INMUEBLES',
    },
    {
      id: 9,
      descripcion: 'VALUACION DE INTANGIGLES',
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
    position: Tiposervicio,
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
