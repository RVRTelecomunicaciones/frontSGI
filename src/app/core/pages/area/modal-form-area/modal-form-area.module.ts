import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormAreasComponent } from './modal-form-area.component';

@NgModule({
  declarations: [ModalFormAreasComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalFormAreasComponent],
})
export class ModalFormAreaModule {}
