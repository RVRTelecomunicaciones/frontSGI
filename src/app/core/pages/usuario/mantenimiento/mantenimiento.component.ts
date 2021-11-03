import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';

const options = [
  {
    value: '1',
    label: 'Gerencia',
    children: [
      {
        value: '1',
        label: 'Gerente',
        isLeaf: true,
      },
      {
        value: '2',
        label: 'Subgerente',
        isLeaf: true,
      },
    ],
  },
  {
    value: '2',
    label: 'Auditoria',
    children: [
      {
        value: '1',
        label: 'Jefe',
        isLeaf: true,
      },
      {
        value: '2',
        label: 'Asistente',
        isLeaf: true,
      },
    ],
  },
  {
    value: '3',
    label: 'Comercial',
    children: [
      {
        value: '1',
        label: 'Jefe',
        isLeaf: true,
      },
      {
        value: '2',
        label: 'Administrador',
        isLeaf: true,
      },
      {
        value: '3',
        label: 'Coordinador',
        isLeaf: true,
      },
      {
        value: '4',
        label: 'Vendedor',
        isLeaf: true,
      },
      {
        value: '5',
        label: 'Asistente',
        isLeaf: true,
      },
    ],
  },
  {
    value: '4',
    label: 'Operaciones',
    children: [
      {
        value: '1',
        label: 'Jefe',
        isLeaf: true,
      },
      {
        value: '2',
        label: 'Perito',
        isLeaf: true,
      },
      {
        value: '3',
        label: 'Perito Externo',
        isLeaf: true,
      },
      {
        value: '4',
        label: 'Practicante',
        isLeaf: true,
      },
    ],
  },
  {
    value: '5',
    label: 'Sistemas',
    children: [
      {
        value: '1',
        label: 'Jefe',
        isLeaf: true,
      },
      {
        value: '2',
        label: 'Asistente',
        isLeaf: true,
      },
    ],
  },
];

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css'],
})
export class MantenimientoComponent implements OnInit {
  validateForm: FormGroup;
  passwordVisible = false;
  confirmPasswordVisible = false;
  password?: string;
  confirmPassword?: string;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      paterno: [
        '',
        [Validators.required, Validators.min(2), Validators.maxLength(15)],
      ],
      materno: [
        '',
        [Validators.required, Validators.min(2), Validators.maxLength(15)],
      ],
      nombres: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      area: ['', [Validators.required]],
      rol: ['', [Validators.required]],

      usuario: ['', [Validators.required], [this.usuarioAsyncValidator]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [this.confirmPasswordValidator]],
    });
  }

  ngOnInit(): void {
    this.addField();
  }

  submitForm(value: {
    paterno: string;
    materno: string;
    nombres: string;
    dni: string;
    email: string;

    area: number;
    rol: number;

    usuario: string;
    password: string;
    confirmPassword: string;
  }): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    console.log(value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() =>
      this.validateForm.controls.confirmPassword.updateValueAndValidity()
    );
  }

  usuarioAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmPasswordValidator = (
    control: FormControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  selectedArea = 'Gerencia';
  selectedRol = 'Sistemas';
  areaData = ['Gerencia', 'Auditoria', 'Comercial', 'Operaciones', 'Sistemas'];
  rolData: { [place: string]: string[] } = {
    Gerencia: ['Gerente', 'Sub Gerente'],
    Auditoria: ['Jefe'],
    Comercial: ['Administrador', 'Coordinador', 'Vendedor'],
    Operaciones: ['Jefe', 'Perito', 'Practicante'],
    Sistemas: ['Jefe', 'Asistente', 'Programador', 'Practicante'],
  };

  areaChange(value: string): void {
    this.selectedRol = this.rolData[value][0];
  }

  /* MULTI */
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id =
      this.listOfControl.length > 0
        ? this.listOfControl[this.listOfControl.length - 1].id + 1
        : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`,
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  /* CASCADER */

  nzOptions: NzCascaderOption[] = options;
}
