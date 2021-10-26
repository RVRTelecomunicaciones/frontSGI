import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { Servicio } from '../servicio.interface';

@Component({
  selector: 'servicio-modal-form',
  styles: [
    `
      .invalid-touched {
        color: #ff4d4f;
      }
    `,
  ],
  templateUrl: './servicio-modal-form.component.html',
})
export class ModalFormComponent implements OnInit {
  @Input() public position!: Servicio;
  @Input() public formMode: string = 'New';
  @Input() public isAddNew!: boolean;
  validateForm!: FormGroup;
  error: string | undefined;
  id: any;
  result!: FormResult;
  constructor(private modal: NzModalRef, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    console.log(this.position);
    console.log(this.formMode);
    console.log(this.isAddNew);
    if (this.position != undefined) {
      this.validateForm.setValue({
        id: this.position.id,
        descripcion: this.position.descripcion,
        tiposervicio: this.position.tiposervicio.toString(),
      });
    }
  }
  private createForm() {
    this.validateForm = this.fb.group({
      id: [''],
      tiposervicio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  get myForm() {
    return this.validateForm.controls;
  }
  submitForm(values: any): void {
    this.modal.close({ data: values });
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    console.log('submit', this.validateForm.value);
    /* RESETEA LOS INPUTS QUE ESTEN DENTRO DEL FORMGROUOP */
    /*     this.validateForm.reset();
     */
  }

  /* create(data: any): void {
    this.apiHttpService
      .post(this.apiEndpointsService.postPositionsEndpoint(), data)
      .subscribe(
        (resp: any) => {
          this.id = resp.data; //guid return in data
          this.result = {
            position: this.position,
            crudType: 'c',
            status: true,
          };
          this.activeModal.close(this.result);
        },
        (error) => {
          log.debug(error);
        }
      );
  } */

  destroyModal(): void {
    this.modal.destroy();
  }
}
