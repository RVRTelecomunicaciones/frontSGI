import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisitoRoutingModule } from './requisito-routing.module';
import { RequisitoListComponent } from './pages/requisito-list/requisito-list.component';
import { ModalFormRequisitoComponent } from './pages/requisito-add/requisito-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RequisitoListComponent, ModalFormRequisitoComponent],
  imports: [CommonModule, RequisitoRoutingModule, NzTableModule, SharedModule],
  exports: [RequisitoListComponent, ModalFormRequisitoComponent],
})
export class RequisitoModule {}
