import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaModalFormComponent } from './area-modal-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AreaModalFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [AreaModalFormComponent],
})
export class AreaModalFormModule {}
