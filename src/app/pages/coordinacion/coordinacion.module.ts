import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinacionRoutingModule } from './coordinacion-routing.module';
import { CoordinacionComponent } from './coordinacion.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CoordinacionComponent],
  imports: [CommonModule, CoordinacionRoutingModule, SharedModule],
})
export class CoordinacionModule {}
