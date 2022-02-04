import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvolucradoJuridicoListComponent } from './pages/involucrado-juridico-list/involucrado-juridico-list.component';

const routes: Routes = [
  {
    path: '',
    component: InvolucradoJuridicoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvolucradoJuridicoRoutingModule {}
