import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { AreaModel } from '../../domain/area.model';

@Component({
  selector: 'modal-form-area',
  styles: [
    `
      .invalid-touched {
        color: #ff4d4f;
      }
    `,
  ],
  templateUrl: './area-add.component.html',
})
export class ModalFormAreaComponent implements OnInit {
  @Input() public position!: AreaModel;
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
        nombre: this.position.nombre,
      });
    }
  }
  private createForm() {
    this.validateForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
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

  destroyModal(): void {
    this.modal.destroy();
  }
}
