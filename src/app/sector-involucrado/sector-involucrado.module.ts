import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectorInvolucradoRoutingModule } from './sector-involucrado-routing.module';
import { SectorInvolucradoListComponent } from './pages/sector-involucrado-list/sector-involucrado-list.component';
import { ModalFormSectorInvolucradoComponent } from './pages/sector-involucrado-add/sector-involucrado-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SectorInvolucradoListComponent,
    ModalFormSectorInvolucradoComponent,
  ],
  imports: [
    CommonModule,
    SectorInvolucradoRoutingModule,
    NzTableModule,
    SharedModule,
  ],
  exports: [
    SectorInvolucradoListComponent,
    ModalFormSectorInvolucradoComponent,
  ],
})
export class SectorInvolucradoModule {}
