import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { ListadoComponent } from './listado/listado.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [UsuarioComponent, ListadoComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    NzCardModule,
    NzTableModule,
    NzDropDownModule,
  ],
})
export class UsuarioModule {}
