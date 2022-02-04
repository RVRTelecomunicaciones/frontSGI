import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisitoListComponent } from './pages/requisito-list/requisito-list.component';

const routes: Routes = [
  {
    path: '',
    component: RequisitoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequisitoRoutingModule {}
