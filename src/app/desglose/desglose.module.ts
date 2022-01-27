import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesgloseRoutingModule } from './desglose-routing.module';
import { DesgloseListComponent } from './pages/desglose-list/desglose-list.component';
import { ModalFormDesgloseComponent } from './pages/desglose-add/desglose-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DesgloseListComponent, ModalFormDesgloseComponent],
  imports: [CommonModule, DesgloseRoutingModule, NzTableModule, SharedModule],
  exports: [DesgloseListComponent, ModalFormDesgloseComponent],
})
export class DesgloseModule {}
