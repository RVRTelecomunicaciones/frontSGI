import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { PageReportComponent } from './pages/page-report/page-report.component';

const routes: Routes = [
  {
    path: '',
    component: PageReportComponent,
    /* canActivate: [AuthorizationGuard], */
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}
