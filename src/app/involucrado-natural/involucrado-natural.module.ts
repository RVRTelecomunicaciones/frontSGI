import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvolucradoNaturalRoutingModule } from './involucrado-natural-routing.module';
import { InvolucradoNaturalListComponent } from './pages/involucrado-natural-list/involucrado-natural-list.component';
import { ModalFormInvolucradoNaturalComponent } from './pages/involucrado-natural-add/involucrado-natural-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InvolucradoNaturalListComponent,
    ModalFormInvolucradoNaturalComponent,
  ],
  imports: [
    CommonModule,
    InvolucradoNaturalRoutingModule,
    NzTableModule,
    SharedModule,
  ],
  exports: [
    InvolucradoNaturalListComponent,
    ModalFormInvolucradoNaturalComponent,
  ],
})
export class InvolucradoNaturalModule {}
