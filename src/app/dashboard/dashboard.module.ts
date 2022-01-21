import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageReportComponent } from './pages/page-report/page-report.component';
import { IconsProviderModule } from '../icons-provider.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [PageReportComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [PageReportComponent, IconsProviderModule],
})
export class DashboardModule {}
