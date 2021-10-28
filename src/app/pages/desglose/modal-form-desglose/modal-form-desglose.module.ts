import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormDesgloseComponent } from './modal-form-desglose.component';

@NgModule({
  declarations: [ModalFormDesgloseComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalFormDesgloseComponent],
})
export class ModalFormDesgloseModule {}
