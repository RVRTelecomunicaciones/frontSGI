import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormComponent } from './servicio-modal-form.component';

@NgModule({
  declarations: [ModalFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalFormComponent],
})
export class ModalFormModule {}
