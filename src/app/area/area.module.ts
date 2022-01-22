import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaListComponent } from './pages/area-list/area-list.component';

@NgModule({
  declarations: [AreaListComponent],
  imports: [CommonModule, AreaRoutingModule],
  exports: [AreaListComponent],
})
export class AreaModule {}
