import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoCotizacionRoutingModule } from './estado-cotizacion-routing.module';
import { EstadoCotizacionListComponent } from './pages/estado-cotizacion-list/estado-cotizacion-list.component';
import { ModalFormEstadoCotizacionComponent } from './pages/estado-cotizacion-add/estado-cotizacion-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EstadoCotizacionListComponent,
    ModalFormEstadoCotizacionComponent,
  ],
  imports: [
    CommonModule,
    EstadoCotizacionRoutingModule,
    NzTableModule,
    SharedModule,
  ],
  exports: [EstadoCotizacionListComponent, ModalFormEstadoCotizacionComponent],
})
export class EstadoCotizacionModule {}
