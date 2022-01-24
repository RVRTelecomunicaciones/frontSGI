import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaListComponent } from './pages/area-list/area-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';
import { FormControl } from '@angular/forms';
import { ModalFormAreaComponent } from './pages/area-add/area-add.component';

@NgModule({
  declarations: [AreaListComponent, ModalFormAreaComponent],
  imports: [CommonModule, AreaRoutingModule, NzTableModule, SharedModule],
  exports: [AreaListComponent, ModalFormAreaComponent],
})
export class AreaModule {}
