import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageReportComponent } from './pages/page-report/page-report.component';
import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
  declarations: [PageReportComponent],
  imports: [CommonModule],
  exports: [PageReportComponent, IconsProviderModule],
})
export class DashboardModule {}
