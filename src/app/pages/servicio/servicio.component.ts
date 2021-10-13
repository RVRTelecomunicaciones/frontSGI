import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

interface Servicio {
  id: number;
  tiposervicio: string;
  name: string;
}

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css'],
})
export class ServicioComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  isOkLoading = false;

  listOfData: Servicio[] = [
    {
      id: 1,
      tiposervicio: 'BIENES INMUEBLES',
      name: 'VALUACIÓN DE TERRENO',
    },
    {
      id: 2,
      tiposervicio: 'BIENES INMUEBLES',
      name: 'VALUACIÓN DE CASA',
    },
    {
      id: 3,
      tiposervicio: 'BIENES INMUEBLES',
      name: 'VALUACIÓN DE DEPARTAMENTO',
    },
    {
      id: 4,
      tiposervicio: 'BIENES INMUEBLES',
      name: 'VALUACIÓN DE OFICINA',
    },
    {
      id: 5,
      tiposervicio: 'BIENES INMUEBLES',
      name: 'VALUACIÓN DE LOCAL COMERCIAL',
    },
    {
      id: 6,
      tiposervicio: 'BIENES INMUEBLES',
      name: 'VALUACIÓN DE LOCAL INDUSTRIAL',
    },
    {
      id: 7,
      tiposervicio: 'BIENES INMUEBLES',
      name: 'VALUACIÓN DE VEHICULOS',
    },
    {
      id: 8,
      tiposervicio: 'BIENES INMUEBLES',
      name: 'VALUACIÓN DE MAQUINARÍAS',
    },
  ];
  listOfDisplayData = [...this.listOfData];

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      tiposervicio: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(value: { tiposervicio: number; name: string }): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    console.log(value);
  }
}
