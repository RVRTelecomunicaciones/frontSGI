import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFormRequisitoComponent } from './modal-form-requisito.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ModalFormRequisitoComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalFormRequisitoComponent],
})
export class ModalFormRequisitoModule {}
