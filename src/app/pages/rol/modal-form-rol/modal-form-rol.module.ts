import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFormRolComponent } from './modal-form-rol.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ModalFormRolComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalFormRolComponent],
})
export class ModalFormRolModule {}
