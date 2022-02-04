import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvolucradoNaturalListComponent } from './pages/involucrado-natural-list/involucrado-natural-list.component';

const routes: Routes = [
  {
    path: '',
    component: InvolucradoNaturalListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvolucradoNaturalRoutingModule {}
