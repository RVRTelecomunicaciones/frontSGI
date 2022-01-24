import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './area.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormAreasComponent } from './modal-form-area/modal-form-area.component';

@NgModule({
  declarations: [AreaComponent, ModalFormAreasComponent],
  imports: [CommonModule, AreaRoutingModule, SharedModule],
})
export class AreaModule {}
