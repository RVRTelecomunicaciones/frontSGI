import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageReportComponent } from './pages/page-report/page-report.component';
import { SharedModule } from '../shared/shared.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
  declarations: [PageReportComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzBadgeModule,
    SharedModule,
  ],
  exports: [
    PageReportComponent,
    IconsProviderModule,
    NzLayoutModule,
    NzAvatarModule,
    NzBadgeModule,
    NzMenuModule,
  ],
})
export class DashboardModule {}
