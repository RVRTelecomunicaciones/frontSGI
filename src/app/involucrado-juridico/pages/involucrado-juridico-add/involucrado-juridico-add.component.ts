import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ClasificacionInvolucradoUseCase } from 'src/app/clasificacion-involucrado/application/clasificacion-involucrado.usecase';
import { ClasificacionInvolucradoModel } from 'src/app/clasificacion-involucrado/domain/clasificacion-involucrado.model';
import { SectorInvolucradoUseCase } from 'src/app/sector-involucrado/application/sector-involucrado.usecase';
import { SectorInvolucradoModel } from 'src/app/sector-involucrado/domain/sector-involucrado.model';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { TipoDocumentoUseCase } from 'src/app/tipo-documento/application/tipo-documento.usecase';
import { TipoDocumentoModel } from 'src/app/tipo-documento/domain/tipo-documento.model';
import { InvolucradoJuridicoUseCase } from '../../application/involucrado-juridico.usecase';
import { InvolucradoJuridicoModel } from '../../domain/involucrado-juridico.model';

@Component({
  selector: 'app-involucrado-juridico-add',
  styles: [
    `
      .invalid-touched {
        color: #ff4d4f;
      }
    `,
  ],
  templateUrl: './involucrado-juridico-add.component.html',
})
export class ModalFormInvolucradoJuridicoComponent implements OnInit {
  @Input() public position!: InvolucradoJuridicoModel;
  @Input() public formMode: string = 'New';
  @Input() public isAddNew!: boolean;
  validateForm!: FormGroup;
  error: string | undefined;
  id: any;
  listOfTipoDocumentos: TipoDocumentoModel[] = [];
  listOfSectores: SectorInvolucradoModel[] = [];
  listOfClasificaciones: ClasificacionInvolucradoModel[] = [];
  result?: FormResult;

  constructor(
    private modal: NzModalService,
    private ModalRef: NzModalRef,
    private fb: FormBuilder,
    private useCase: InvolucradoJuridicoUseCase,
    private useCaseTipo: TipoDocumentoUseCase,
    private useCaseSector: SectorInvolucradoUseCase,
    private useCaseClasificacion: ClasificacionInvolucradoUseCase
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getTipoDocumentos();
    this.getSectores();
    this.getClasificaciones();
    if (this.position != undefined) {
      this.validateForm.setValue({
        id: this.position.id,
        razon_social: this.position.razon_social,
        tipoDocumento: this.position.tipoDocumento.id,
        nro_documento: this.position.nro_documento,
        direccion: this.position.direccion,
        correo: this.position.correo,
        telefono: this.position.telefono,
        /*celular1: this.position.celular1,
        celular2: this.position.celular2,*/
        sector: this.position.sector.id,
        clasificacion: this.position.clasificacion.id,
      });
    }
  }

  getTipoDocumentos() {
    this.useCaseTipo.getByPageList(1, 10).subscribe((data: any) => {
      this.listOfTipoDocumentos = data.data;
    });
  }

  getSectores() {
    this.useCaseSector.getByPageList(1, 10).subscribe((data: any) => {
      this.listOfSectores = data.data;
    });
  }

  getClasificaciones() {
    this.useCaseClasificacion.getByPageList(1, 10).subscribe((data: any) => {
      this.listOfClasificaciones = data.data;
    });
  }

  private createForm() {
    this.validateForm = this.fb.group({
      id: [''],
      razon_social: ['', [Validators.required]],
      tipoDocumento: ['', [Validators.required]],
      nro_documento: ['', [Validators.required]],
      direccion: [''],
      correo: [''],
      telefono: [''],
      /*celular1: ['', []],
      celular2: ['', []],*/
      sector: [''],
      clasificacion: [''],
    });
  }

  get myForm() {
    return this.validateForm.controls;
  }

  submitForm(mydata: any): void {
    const myform = this.validateForm.value;

    this.useCase.insert(myform).subscribe(
      (resp: any) => {
        this.result = { crudType: 'c', status: true, message: resp };
        this.ModalRef!.close(this.result);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  update(id: number, formdata: any): void {
    if (this.validateForm.dirty) {
      this.position.id = this.validateForm.get('id')!.value;
      this.position.razon_social = this.validateForm.get('razon_social')!.value;
      this.position.tipoDocumento.id =
        this.validateForm.get('tipoDocumento')!.value;
      const myvarTipo = this.listOfTipoDocumentos
        .find((el) => el.id === this.position.tipoDocumento.id)
        ?.abreviatura.toString();
      this.position.tipoDocumento.abreviatura = myvarTipo ? myvarTipo : '';
      this.position.nro_documento =
        this.validateForm.get('nro_documento')!.value;
      this.position.direccion = this.validateForm.get('direccion')!.value;
      this.position.correo = this.validateForm.get('correo')!.value;
      this.position.telefono = this.validateForm.get('telefono')!.value;
      /*this.position.celular1 = this.validateForm.get('celular1')!.value;
      this.position.celular2 = this.validateForm.get('celular2')!.value;*/

      this.position.sector.id = this.validateForm.get('sector')!.value;
      const myvarSector = this.listOfSectores
        .find((el) => el.id === this.position.sector.id)
        ?.nombre.toString();
      this.position.sector.nombre = myvarSector ? myvarSector : '';

      this.position.clasificacion.id =
        this.validateForm.get('clasificacion')!.value;
      const myvarClasificacion = this.listOfClasificaciones
        .find((el) => el.id === this.position.clasificacion.id)
        ?.nombre.toString();
      this.position.clasificacion.nombre = myvarClasificacion
        ? myvarClasificacion
        : '';

      this.useCase.update(id, this.position).subscribe((resp: any) => {
        this.result = {
          crudType: 'u',
          status: true,
          message: resp,
        };

        this.ModalRef!.close(this.result);
      }),
        (error: any) => {
          console.log(error);
        };
    }
  }

  onUpdate({}: { value: InvolucradoJuridicoModel; valid: boolean }) {
    this.update(this.validateForm.get('id')!.value, this.validateForm.value);
  }

  destroyModal(): void {
    this.ModalRef!.destroy();
  }
}
