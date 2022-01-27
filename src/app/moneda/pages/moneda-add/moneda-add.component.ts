import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { MonedaUseCase } from '../../application/moneda.usecase';
import { MonedaModel } from '../../domain/moneda.model';

@Component({
  selector: 'modal-form-moneda',
  templateUrl: './moneda-add.component.html',
  styles: [
    `
      .invalid-touched {
        color: #ff4d4f;
      }
    `,
  ],
})
export class ModalFormMonedaComponent implements OnInit {
  @Input() public position!: MonedaModel;
  @Input() public formMode: string = 'New';
  @Input() public isAddNew!: boolean;
  validateForm!: FormGroup;
  error: string | undefined;
  id: any;
  result?: FormResult;

  constructor(
    private modal: NzModalService,
    private ModalRef: NzModalRef,
    private fb: FormBuilder,
    private useCase: MonedaUseCase
  ) {}

  ngOnInit(): void {
    this.createForm();
    console.log(this.position);
    console.log(this.formMode);
    console.log(this.isAddNew);
    if (this.position != undefined) {
      this.validateForm.setValue({
        id: this.position.id,
        codigo: this.position.codigo,
        simbolo: this.position.simbolo,
        nombre: this.position.nombre,
      });
    }
  }

  private createForm() {
    this.validateForm = this.fb.group({
      id: [''],
      codigo: ['', [Validators.required]],
      simbolo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
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
        this.result = { position: this.position, crudType: 'c', status: true };
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
    this.useCase.update(id, formdata).subscribe(
      (resp: any) => {
        console.log(resp);
        this.id = resp.data; //guid return in data
        if (this.validateForm.dirty) {
          this.position.id = this.validateForm.get('id')!.value;
          this.position.codigo = this.validateForm.get('codigo')!.value;
          this.position.simbolo = this.validateForm.get('simbolo')!.value;
          this.position.nombre = this.validateForm.get('nombre')!.value;

          this.result = {
            position: this.position,
            crudType: 'u',
            status: true,
          };

          // close the modal
          this.ModalRef!.close(this.result);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onUpdate({}: { value: MonedaModel; valid: boolean }) {
    this.update(this.validateForm.get('id')!.value, this.validateForm.value);
  }

  destroyModal(): void {
    this.ModalRef!.destroy();
  }
}
