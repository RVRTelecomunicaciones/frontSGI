import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposervicioRoutingModule } from './tiposervicio-routing.module';
import { TiposervicioComponent } from './tiposervicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormTipoServicioComponent } from './modal-form-tipo-servicio/modal-form-tipo-servicio.component';

@NgModule({
  declarations: [TiposervicioComponent, ModalFormTipoServicioComponent],
  imports: [CommonModule, TiposervicioRoutingModule, SharedModule],
})
export class TiposervicioModule {}
