import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioListComponent } from './pages/servicio-list/servicio-list.component';
import { ModalFormServicioComponent } from './pages/servicio-add/servicio-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ServicioListComponent, ModalFormServicioComponent],
  imports: [CommonModule, ServicioRoutingModule, NzTableModule, SharedModule],
  exports: [ServicioListComponent, ModalFormServicioComponent],
})
export class ServicioModule {}
