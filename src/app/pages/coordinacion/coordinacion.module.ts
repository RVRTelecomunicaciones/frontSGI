import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinacionRoutingModule } from './coordinacion-routing.module';
import { CoordinacionListComponent } from './coordinacion-list/coordinacion-list.component';
import { CoordinacionComponent } from './coordinacion.component';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    CoordinacionListComponent,
    CoordinacionComponent,
  ],
  imports: [
    CommonModule,
    CoordinacionRoutingModule,
    NzCardModule,
  ]
})
export class CoordinacionModule { }
