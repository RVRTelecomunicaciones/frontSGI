import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { RolComponent } from './rol.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormRolComponent } from './modal-form-rol/modal-form-rol.component';

@NgModule({
  declarations: [RolComponent, ModalFormRolComponent],
  imports: [CommonModule, RolRoutingModule, SharedModule],
})
export class RolModule {}
