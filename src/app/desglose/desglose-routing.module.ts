import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesgloseListComponent } from './pages/desglose-list/desglose-list.component';

const routes: Routes = [
  {
    path: '',
    component: DesgloseListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesgloseRoutingModule {}
