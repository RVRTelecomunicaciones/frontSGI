import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { TipoServicioUseCase } from 'src/app/tipo-servicio/application/tipo-servicio.usecase';
import { TipoServicioModel } from 'src/app/tipo-servicio/domain/tipo-servicio.model';
import { ServicioUseCase } from '../../application/servicio.usecase';
import { ServicioModel } from '../../domain/servicio.model';

@Component({
  selector: 'app-servicio-add',
  styles: [
    `
      .invalid-touched {
        color: #ff4d4f;
      }
    `,
  ],
  templateUrl: './servicio-add.component.html',
})
export class ModalFormServicioComponent implements OnInit {
  @Input() public position!: ServicioModel;
  @Input() public formMode: string = 'New';
  @Input() public isAddNew!: boolean;
  validateForm!: FormGroup;
  error: string | undefined;
  id: any;
  listOfTipoServicios: TipoServicioModel[] = [];
  result?: FormResult;

  constructor(
    private modal: NzModalService,
    private ModalRef: NzModalRef,
    private fb: FormBuilder,
    private useCase: ServicioUseCase,
    private useCaseTipo: TipoServicioUseCase
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getTipoServicios();
    console.log(this.position);
    console.log(this.formMode);
    console.log(this.isAddNew);
    if (this.position != undefined) {
      this.validateForm.setValue({
        id: this.position.id,
        nombre: this.position.nombre,
        tipoServicio: this.position.tipoServicio.id,
      });
    }
  }

  getTipoServicios() {
    //this.loading = true;

    this.useCaseTipo.getByPageList(1, 10).subscribe((data: any) => {
      //this.loading = false;
      //this.total = data.meta.itemCount;
      this.listOfTipoServicios = data.data;
    });
  }

  private createForm() {
    this.validateForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
      tipoServicio: ['', [Validators.required]],
    });
  }

  get myForm() {
    return this.validateForm.controls;
  }

  submitForm(mydata: any): void {
    const myform = this.validateForm.value;

    this.useCase.insert(myform).subscribe(
      () => {
        console.log('Data added successfully!');
        this.result = { crudType: 'c', status: true };
        console.log(this.result);
        this.ModalRef!.close(this.result);
      },
      (err) => {
        console.log(err);
      }
    );

    console.log('submit', this.validateForm.value);
  }

  update(id: number, formdata: any): void {
    console.log('LLEGUE');
    console.log(this.validateForm);

    if (this.validateForm.dirty) {
      console.log('dirty');

      this.position.id = this.validateForm.get('id')!.value;
      this.position.nombre = this.validateForm.get('nombre')!.value;
      this.position.tipoServicio.id =
        this.validateForm.get('tipoServicio')!.value;
      const myvar = this.listOfTipoServicios
        .find((el) => el.id === this.position.tipoServicio.id)
        ?.nombre.toString();
      this.position.tipoServicio.nombre = myvar ? myvar : '';
      this.useCase.update(id, this.position).subscribe((resp: any) => {
        console.log('RESPUESTA' + JSON.stringify(resp));

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
    /* console.log('formdata');
    console.log(formdata);
    console.log('POSITION INICAL' + JSON.stringify(this.position));

    this.position.nombre = this.validateForm.get('nombre')!.value;
    this.position.tipoServicio.id =
      this.validateForm.get('tipoServicio')!.value; */
  }

  onUpdate({}: { value: ServicioModel; valid: boolean }) {
    this.update(this.validateForm.get('id')!.value, this.validateForm.value);
  }

  destroyModal(): void {
    this.ModalRef!.destroy();
  }
}
