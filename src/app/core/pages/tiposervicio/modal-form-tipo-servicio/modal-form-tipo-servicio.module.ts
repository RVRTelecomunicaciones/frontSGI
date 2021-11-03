import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFormTipoServicioComponent } from './modal-form-tipo-servicio.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ModalFormTipoServicioComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalFormTipoServicioComponent],
})
export class ModalFormTipoServicioModule {}
