import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoServicioRoutingModule } from './tipo-servicio-routing.module';
import { ModalFormTipoServicioComponent } from './pages/tipo-servicio-add/tipo-servicio-add.component';
import { TipoServicioListComponent } from './pages/tipo-servicio-list/tipo-servicio-list.component';
import { SharedModule } from '../shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [TipoServicioListComponent, ModalFormTipoServicioComponent],
  imports: [
    CommonModule,
    TipoServicioRoutingModule,
    NzTableModule,
    SharedModule,
  ],
  exports: [TipoServicioListComponent, ModalFormTipoServicioComponent],
})
export class TipoServicioModule {}
