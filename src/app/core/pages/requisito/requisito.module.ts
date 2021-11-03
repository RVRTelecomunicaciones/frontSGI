import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisitoRoutingModule } from './requisito-routing.module';
import { RequisitoComponent } from './requisito.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalFormRequisitoComponent } from './modal-form-requisito/modal-form-requisito.component';

@NgModule({
  declarations: [RequisitoComponent, ModalFormRequisitoComponent],
  imports: [CommonModule, RequisitoRoutingModule, SharedModule],
})
export class RequisitoModule {}
