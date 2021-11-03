import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvolucradoNaturalRoutingModule } from './involucrado-natural-routing.module';
import { InvolucradoNaturalComponent } from './involucrado-natural.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InvolucradoNaturalComponent],
  imports: [CommonModule, InvolucradoNaturalRoutingModule, SharedModule],
})
export class InvolucradoNaturalModule {}
