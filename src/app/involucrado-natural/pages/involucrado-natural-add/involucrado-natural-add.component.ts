import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { TipoDocumentoUseCase } from 'src/app/tipo-documento/application/tipo-documento.usecase';
import { TipoDocumentoModel } from 'src/app/tipo-documento/domain/tipo-documento.model';
import { InvolucradoNaturalUseCase } from '../../application/involucrado-natural.usecase';
import { InvolucradoNaturalModel } from '../../domain/involucrado-natural.model';

@Component({
  selector: 'app-involucrado-natural-add',
  styles: [
    `
      .invalid-touched {
        color: #ff4d4f;
      }
    `,
  ],
  templateUrl: './involucrado-natural-add.component.html',
})
export class ModalFormInvolucradoNaturalComponent implements OnInit {
  @Input() public position!: InvolucradoNaturalModel;
  @Input() public formMode: string = 'New';
  @Input() public isAddNew!: boolean;
  validateForm!: FormGroup;
  error: string | undefined;
  id: any;
  listOfTipoDocumentos: TipoDocumentoModel[] = [];
  result?: FormResult;

  constructor(
    private modal: NzModalService,
    private ModalRef: NzModalRef,
    private fb: FormBuilder,
    private useCase: InvolucradoNaturalUseCase,
    private useCaseTipo: TipoDocumentoUseCase
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getTipoDocumentos();
    if (this.position != undefined) {
      this.validateForm.setValue({
        id: this.position.id,
        paterno: this.position.paterno,
        materno: this.position.materno,
        nombre: this.position.nombre,
        tipoDocumento: this.position.tipoDocumento.id,
        nro_documento: this.position.nro_documento,
        direccion: this.position.direccion,
        correo: this.position.correo,
        telefono: this.position.telefono,
        celular1: this.position.celular1,
        celular2: this.position.celular2,
      });
    }
  }

  getTipoDocumentos() {
    this.useCaseTipo.getByPageList(1, 10).subscribe((data: any) => {
      this.listOfTipoDocumentos = data.data;
    });
  }

  private createForm() {
    this.validateForm = this.fb.group({
      id: [''],
      paterno: ['', [Validators.required]],
      materno: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      tipoDocumento: ['', [Validators.required]],
      nro_documento: ['', [Validators.required]],
      direccion: [''],
      correo: [''],
      telefono: [''],
      celular1: [''],
      celular2: [''],
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
      this.position.paterno = this.validateForm.get('paterno')!.value;
      this.position.materno = this.validateForm.get('materno')!.value;
      this.position.nombre = this.validateForm.get('nombre')!.value;
      this.position.tipoDocumento.id =
        this.validateForm.get('tipoDocumento')!.value;
      const myvar = this.listOfTipoDocumentos
        .find((el) => el.id === this.position.tipoDocumento.id)
        ?.abreviatura.toString();
      this.position.tipoDocumento.abreviatura = myvar ? myvar : '';
      this.position.nro_documento =
        this.validateForm.get('nro_documento')!.value;
      this.position.direccion = this.validateForm.get('direccion')!.value;
      this.position.correo = this.validateForm.get('correo')!.value;
      this.position.telefono = this.validateForm.get('telefono')!.value;
      this.position.celular1 = this.validateForm.get('celular1')!.value;
      this.position.celular2 = this.validateForm.get('celular2')!.value;

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

  onUpdate({}: { value: InvolucradoNaturalModel; valid: boolean }) {
    this.update(this.validateForm.get('id')!.value, this.validateForm.value);
  }

  destroyModal(): void {
    this.ModalRef!.destroy();
  }
}
