import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoCoordinacionRoutingModule } from './estado-coordinacion-routing.module';
import { EstadoCoordinacionListComponent } from './pages/estado-coordinacion-list/estado-coordinacion-list.component';
import { ModalFormEstadoCoordinacionComponent } from './pages/estado-coordinacion-add/estado-coordinacion-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EstadoCoordinacionListComponent,
    ModalFormEstadoCoordinacionComponent,
  ],
  imports: [
    CommonModule,
    EstadoCoordinacionRoutingModule,
    NzTableModule,
    SharedModule,
  ],
  exports: [
    EstadoCoordinacionListComponent,
    ModalFormEstadoCoordinacionComponent,
  ],
})
export class EstadoCoordinacionModule {}
