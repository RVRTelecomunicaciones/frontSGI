import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoDigitDecimaNumberDirective } from './two-decimal-number.directive';

@NgModule({
  declarations: [TwoDigitDecimaNumberDirective],
  imports: [CommonModule],
  exports: [TwoDigitDecimaNumberDirective],
})
export class DirectiveModule {}
