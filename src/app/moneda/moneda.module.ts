import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonedaRoutingModule } from './moneda-routing.module';
import { MonedaListComponent } from './pages/moneda-list/moneda-list.component';
import { ModalFormMonedaComponent } from './pages/moneda-add/moneda-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MonedaListComponent, ModalFormMonedaComponent],
  imports: [CommonModule, MonedaRoutingModule, NzTableModule, SharedModule],
  exports: [MonedaListComponent, ModalFormMonedaComponent],
})
export class MonedaModule {}
