import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposervicioRoutingModule } from './tiposervicio-routing.module';
import { TiposervicioComponent } from './tiposervicio.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [TiposervicioComponent],
  imports: [
    CommonModule,
    TiposervicioRoutingModule,
    NzCardModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
  ],
})
export class TiposervicioModule {}
