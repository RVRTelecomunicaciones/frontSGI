import { Component, Input, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormResult } from 'src/app/shared/models/form-result-modal';
import { AreaUseCase } from '../../application/area.usecase';
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
  result?: FormResult;
  /*   ModalRef?: NzModalRef;
   */
  constructor(
    private modal: NzModalService,
    private ModalRef: NzModalRef,
    private fb: FormBuilder,
    private useCase: AreaUseCase
  ) {}

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
  onUpdate({}: { value: AreaModel; valid: boolean }) {
    if (this.validateForm.dirty) {
      this.update(this.validateForm.get('id')!.value, this.validateForm.value);
    }
  }

  destroyModal(): void {
    this.ModalRef!.destroy();
  }
}
