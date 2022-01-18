import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => {};

@Component({
  selector: 'password-input',
  template: `<div class="relative mt-6">
    <label
      class="text-sm font-normal text-labelColorInput tracking-semi_normal"
    >
      Contraseña
    </label>
    <input
      class="content-center w-full py-2 pl-4 pr-8 text-base border-gray-300 rounded-lg  hover:border-allemantBlue"
      required
      formControlName="password"
      placeholder="Ingresa tu contraseña"
      type="password"
    />
    <div class="input" #toogler>
      <i class="absolute inset-y-0 right-0 pr-3 far fa-eye fa-2x top-30px"></i>
    </div>
  </div>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PasswordInputComponent,
    },
  ],
})
export class PasswordInputComponent
  implements AfterViewInit, ControlValueAccessor
{
  // PARA ICONO SHOW PASSWORD
  @ViewChild('input') el?: ElementRef;
  @ViewChild('toggler') toggler?: ElementRef;
  @Input() behaviour: string = 'press';
  //
  private _value?: string;
  private _onChange: (_: any) => void = noop;

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChange(v);
    }
  }

  ngAfterViewInit() {
    let __this = this;
    let textbox = __this.el?.nativeElement;
    let toggler = __this.toggler?.nativeElement;
    let togglerIcon = toggler.childNodes[0];
    if (__this.behaviour === 'click') {
      toggler.addEventListener('click', (e: any) => {
        textbox.type = textbox.type === 'password' ? 'text' : 'password';
        togglerIcon.classList.toggle('far fa-eye');
        togglerIcon.classList.toggle('far fa-eye-slash');
      });
    }
  }

  writeValue(value: any) {
    this._value = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {}
}
