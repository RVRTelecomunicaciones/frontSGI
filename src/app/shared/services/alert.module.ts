import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { AlertService } from './alert.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  providers: [AlertService],
})
export class AlertModule {}
