import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFormMonedaComponent } from './modal-form-moneda.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ModalFormMonedaComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalFormMonedaComponent],
})
export class ModalFormMonedaModule {}
