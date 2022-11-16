import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { merge, Subscription } from 'rxjs';
import { mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css'],
})
export class IntroduccionComponent implements OnInit {
  validateForm!: FormGroup;

  valorPartida: string = '';
  subTotalLindero!: Subscription;
  areaSinTechar!: Subscription;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  listOfEdificacion: Array<{ id: number; controlInstanceEdificacion: string }> =
    [];

  constructor(private fb: FormBuilder) {}

  private createForm() {
    this.validateForm = this.fb.group({
      partidaRegistral: ['', [Validators.required]],
      memoriaDescriptiva: ['', [Validators.required]],
      predioUrbano: ['', [Validators.required]],
      tasacionAnterior: ['', [Validators.required]],
      parametrosUrb: ['', [Validators.required]],
      cuadroAcabados: ['', [Validators.required]],
      planos: ['', [Validators.required]],
      minuta: ['', [Validators.required]],
      porFrenteDescripcion: ['', [Validators.required]],
      porFrenteValor: ['', [Validators.required]],
      porDerechaDescripcion: ['', [Validators.required]],
      porDerechaValor: ['', [Validators.required]],
      porIzquierdaDescripcion: ['', [Validators.required]],
      porIzquierdaValor: ['', [Validators.required]],
      porFondoDescripcion: ['', [Validators.required]],
      porFondoValor: ['', [Validators.required]],
      totalLindero: [],
      areaOcupada0: [''],
      areaTechada0: [''],
      areaSinTechar0: [''],
      areaOcupada1: [''],
      areaTechada1: [''],
      areaSinTechar1: [''],
      areaOcupada2: [''],
      areaTechada2: [''],
      areaSinTechar2: [''],
      areaOcupada3: [''],
      areaTechada3: [''],
      areaSinTechar3: [''],
    });
  }
  ngOnInit(): void {
    this.createForm();
    this.subTotalLindero = merge(
      this.validateForm.get('porFrenteValor')!.valueChanges,
      this.validateForm.get('porDerechaValor')!.valueChanges,
      this.validateForm.get('porIzquierdaValor')!.valueChanges,
      this.validateForm.get('porFondoValor')!.valueChanges
    ).subscribe((res: any) => {
      this.calculator();
      console.log(this.listOfEdificacion.length);
    });
    this.addField();
    this.addEdificacion();

    this.areaSinTechar = merge(
      this.validateForm.get('areaOcupada0')!.valueChanges,
      this.validateForm.get('areaTechada0')!.valueChanges
    ).subscribe((res: any) => {
      this.calculoAreaSinTechar();
    });

    for (let i = 0; i < this.listOfEdificacion.length; i++) {
      console.log(this.validateForm.get('areaOcupada' + i)!.valueChanges);

      /*  this.areaSinTechar = merge(
        this.validateForm.get('areaOcupada' + i)!.valueChanges,
        this.validateForm.get('areaTechada' + i)!.valueChanges
      ).subscribe((res: any) => {
        this.calculoAreaSinTechar();
      }); */
    }
  }
  get myForm() {
    return this.validateForm.controls;
  }

  onChange(updatedValue: string) {
    console.log(updatedValue);
    this.valorPartida = updatedValue;
    console.log(this.valorPartida);
  }

  calculator(): void {
    const porFrente = +this.validateForm.get('porFrenteValor')?.value;
    const porDerecha = +this.validateForm.get('porDerechaValor')?.value;
    const porIzquierda = +this.validateForm.get('porIzquierdaValor')?.value;
    const porFondo = +this.validateForm.get('porFondoValor')?.value;
    this.validateForm
      .get('totalLindero')
      ?.setValue(porFrente + porDerecha + porIzquierda + porFondo);
  }

  calculoAreaSinTechar(): void {
    console.log(this.listOfEdificacion.length);
    for (let i = 0; i < this.listOfEdificacion.length; i++) {
      const areaOcupada = +this.validateForm.get('areaOcupada' + i)?.value;
      const areaTechada = +this.validateForm.get('areaTechada' + i)?.value;
      console.log(areaOcupada - areaTechada);
      this.validateForm
        .get('areaSinTechar' + i)
        ?.setValue(areaOcupada - areaTechada);
    }
  }

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
      controlInstance: `tasacion${id}`,
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

  addEdificacion(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id =
      this.listOfEdificacion.length > 0
        ? this.listOfEdificacion[this.listOfEdificacion.length - 1].id + 1
        : 0;
    console.log(this.listOfEdificacion.length);

    const control = {
      id,
      controlInstanceEdificacion: `edificacion${id}`,
    };
    const index = this.listOfEdificacion.push(control);
    this.validateForm.addControl(
      this.listOfEdificacion[index - 1].controlInstanceEdificacion,
      new FormControl(null, Validators.required)
    );
  }
  removeFieldEdificacion(
    i: { id: number; controlInstanceEdificacion: string },
    e: MouseEvent
  ): void {
    e.preventDefault();
    if (this.listOfEdificacion.length > 1) {
      const index = this.listOfEdificacion.indexOf(i);
      this.listOfEdificacion.splice(index, 1);
      console.log(this.listOfEdificacion);
      this.validateForm.removeControl(i.controlInstanceEdificacion);
    }
  }
}
