import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageReportComponent } from './pages/page-report/page-report.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
