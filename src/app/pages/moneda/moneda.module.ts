import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonedaRoutingModule } from './moneda-routing.module';
import { MonedaComponent } from './moneda.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormMonedaComponent } from './modal-form-moneda/modal-form-moneda.component';

@NgModule({
  declarations: [MonedaComponent, ModalFormMonedaComponent],
  imports: [CommonModule, MonedaRoutingModule, SharedModule],
})
export class MonedaModule {}
