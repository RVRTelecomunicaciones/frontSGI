import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormAreaComponent } from './modal-form-area.component';

@NgModule({
  declarations: [ModalFormAreaComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalFormAreaComponent],
})
export class ModalFormAreaModule {}
