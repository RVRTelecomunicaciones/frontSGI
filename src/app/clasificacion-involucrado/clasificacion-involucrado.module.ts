import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasificacionInvolucradoRoutingModule } from './clasificacion-involucrado-routing.module';
import { ClasificacionInvolucradoListComponent } from './pages/clasificacion-involucrado-list/clasificacion-involucrado-list.component';
import { ModalFormClasificacionInvolucradoComponent } from './pages/clasificacion-involucrado-add/clasificacion-involucrado-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClasificacionInvolucradoListComponent,
    ModalFormClasificacionInvolucradoComponent,
  ],
  imports: [
    CommonModule,
    ClasificacionInvolucradoRoutingModule,
    NzTableModule,
    SharedModule,
  ],
  exports: [
    ClasificacionInvolucradoListComponent,
    ModalFormClasificacionInvolucradoComponent,
  ],
})
export class ClasificacionInvolucradoModule {}
