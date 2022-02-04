import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvolucradoJuridicoRoutingModule } from './involucrado-juridico-routing.module';
import { InvolucradoJuridicoListComponent } from './pages/involucrado-juridico-list/involucrado-juridico-list.component';
import { ModalFormInvolucradoJuridicoComponent } from './pages/involucrado-juridico-add/involucrado-juridico-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InvolucradoJuridicoListComponent,
    ModalFormInvolucradoJuridicoComponent,
  ],
  imports: [
    CommonModule,
    InvolucradoJuridicoRoutingModule,
    NzTableModule,
    SharedModule,
  ],
  exports: [
    InvolucradoJuridicoListComponent,
    ModalFormInvolucradoJuridicoComponent,
  ],
})
export class InvolucradoJuridicoModule {}
