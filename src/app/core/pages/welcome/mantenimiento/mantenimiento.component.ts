import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css'],
})
export class MantenimientoComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private modal: NzModalService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      codigoCotizacion: [null, [Validators.required]],
      cantidadInforme: [null, [Validators.required]],
      tipoCotizacion: [null, [Validators.required]],
      estadoCotizacion: [null, [Validators.required]],
      servicioTipoCotizacion: [null, [Validators.required]],
      codigocs: [''],
      adjuntocs: [''],

      solicitante: [null, [Validators.required]],
      cliente: [null, [Validators.required]],
      propietario: [null, [Validators.required]],
      vendedor: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: '¿ Esta seguro de cancelar la operación ?',
      //nzContent: ' <b style="color: red;">Some descriptions</b>',
      nzOkText: 'Aceptar',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}
