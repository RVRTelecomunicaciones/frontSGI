import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { ModalFormComponent } from './modal-form-servicio/servicio-modal-form.component';
import { Servicio } from './servicio.interface';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css'],
})
export class ServicioComponent implements OnInit {
  position!: Servicio;
  nzModalref = NzModalRef;

  listOfData: Servicio[] = [
    {
      id: 1,
      tiposervicio: 2,
      descripcion: 'VALUACIÓN DE TERRENO',
    },
    {
      id: 2,
      tiposervicio: 1,
      descripcion: 'VALUACIÓN DE CASA',
    },
    {
      id: 3,
      tiposervicio: 1,
      descripcion: 'VALUACIÓN DE DEPARTAMENTO',
    },
    {
      id: 4,
      tiposervicio: 2,
      descripcion: 'VALUACIÓN DE OFICINA',
    },
    {
      id: 5,
      tiposervicio: 3,
      descripcion: 'VALUACIÓN DE LOCAL COMERCIAL',
    },
    {
      id: 6,
      tiposervicio: 2,
      descripcion: 'VALUACIÓN DE LOCAL INDUSTRIAL',
    },
    {
      id: 7,
      tiposervicio: 1,
      descripcion: 'VALUACIÓN DE VEHICULOS',
    },
    {
      id: 8,
      tiposervicio: 3,
      descripcion: 'VALUACIÓN DE MAQUINARÍAS',
    },
  ];
  listOfDisplayData = [...this.listOfData];

  constructor(private modalService: NzModalService) {
    console.log('YO EJECUTE PRIMERO CONSTRUCTOR');
  }

  ngOnInit(): void {
    console.log('YO EJECUTE PRIMERO NGONINIT');
    this.addRow();
  }

  addRow(): void {
    if (this.listOfData === undefined) {
      return;
    }
    this.listOfData = [...this.listOfData];
  }

  openModalWithComponent(
    position: Servicio,
    formMode: string,
    isAddNew: boolean
  ) {
    const nzModalref = this.modalService.create({
      nzTitle: 'AAAA',
      nzContent: ModalFormComponent,
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
