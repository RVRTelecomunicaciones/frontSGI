import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonedaListComponent } from './pages/moneda-list/moneda-list.component';

const routes: Routes = [
  {
    path: '',
    component: MonedaListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonedaRoutingModule {}
