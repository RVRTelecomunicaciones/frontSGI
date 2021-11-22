/* import { AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'password-input',
  template: ` <div class="input-group mb-2 mr-sm-2 mb-sm-0">
    <input
      type="password"
      class="form-control"
      placeholder="{{ placeholder }}"
      #input
      [(ngModel)]="value"
    />
    <div class="input-group-addon" #toggler>< class="far fa-eye"></i></div>
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
  ngAfterViewInit() {}
}
 */
