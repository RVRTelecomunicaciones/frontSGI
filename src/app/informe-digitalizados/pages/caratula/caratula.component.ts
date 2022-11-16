import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InformeDigitalizadoUseCase } from '../../application/informe-digitalizado.usecase';
import { TipoUsoModel } from '../../domain/tipo-uso.model';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.component.html',
  styleUrls: ['./caratula.component.css'],
})
export class CaratulaComponent implements OnInit {
  validateForm!: FormGroup;
  listOfTipoUso: TipoUsoModel[] = [];
  error: string | undefined;
  checked = false;
  optionCargas: string = '';
  optionGravamenes: string = '';
  isDisabled: boolean = true;

  fileList: NzUploadFile[] = [];
  constructor(
    private fb: FormBuilder,
    private useCaseInforme: InformeDigitalizadoUseCase
  ) {}
  ngOnInit(): void {
    this.getTipoUso();
    this.createForm();
    this.addField();
  }
  private createForm() {
    this.validateForm = this.fb.group({
      tipoUso01: ['', [Validators.required]],
      tipoUso02: ['', [Validators.required]],
      porcetanje1: ['', [Validators.required]],
      porcetanje2: ['', [Validators.required]],
      option_cargas: ['', [Validators.required]],
      option_gravamenes: ['', [Validators.required]],
      cargas: ['', [Validators.required]],
      gravamenes: ['', [Validators.required]],
    });
  }
  get myForm() {
    return this.validateForm.controls;
  }

  getTipoUso() {
    this.useCaseInforme.getByPageListUso(1, 10).subscribe((data: any) => {
      this.listOfTipoUso = data.data;
    });
  }
  change(event: any) {
    console.log(event.target.value);
  }
  changeCargas(e: string) {
    console.log(e);
    if (e === 'true') {
      this.optionCargas = '';
    } else {
      this.optionCargas = '(*) No se contó con información.';
    }
  }
  changeGravamenes(e: string) {
    if (e === 'true') {
      this.optionGravamenes = '';
      console.log(this.optionGravamenes);
    } else {
      this.optionGravamenes = '(*) No se contó con información.';
    }
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file.preview) {
      file.preview = await this.getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };

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
}
