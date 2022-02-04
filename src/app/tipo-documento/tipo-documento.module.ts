import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoDocumentoRoutingModule } from './tipo-documento-routing.module';
import { TipoDocumentoListComponent } from './pages/tipo-documento-list/tipo-documento-list.component';
import { ModalFormTipoDocumentoComponent } from './pages/tipo-documento-add/tipo-documento-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TipoDocumentoListComponent, ModalFormTipoDocumentoComponent],
  imports: [
    CommonModule,
    TipoDocumentoRoutingModule,
    NzTableModule,
    SharedModule,
  ],
  exports: [TipoDocumentoListComponent, ModalFormTipoDocumentoComponent],
})
export class TipoDocumentoModule {}
