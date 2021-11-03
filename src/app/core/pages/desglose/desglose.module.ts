import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesgloseRoutingModule } from './desglose-routing.module';
import { DesgloseComponent } from './desglose.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormDesgloseComponent } from './modal-form-desglose/modal-form-desglose.component';

@NgModule({
  declarations: [DesgloseComponent, ModalFormDesgloseComponent],
  imports: [CommonModule, DesgloseRoutingModule, SharedModule],
})
export class DesgloseModule {}
