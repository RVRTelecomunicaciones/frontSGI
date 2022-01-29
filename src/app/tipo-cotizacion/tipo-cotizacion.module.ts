import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoCotizacionRoutingModule } from './tipo-cotizacion-routing.module';
import { TipoCotizacionListComponent } from './pages/tipo-cotizacion-list/tipo-cotizacion-list.component';
import { ModalFormTipoCotizacionComponent } from './pages/tipo-cotizacion-add/tipo-cotizacion-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TipoCotizacionListComponent, ModalFormTipoCotizacionComponent],
  imports: [
    CommonModule,
    TipoCotizacionRoutingModule,
    NzTableModule,
    SharedModule,
  ],
  exports: [TipoCotizacionListComponent, ModalFormTipoCotizacionComponent],
})
export class TipoCotizacionModule {}
