import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvolucradoNaturalComponent } from './involucrado-natural.component';

const routes: Routes = [
  {
    path: '',
    component: InvolucradoNaturalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvolucradoNaturalRoutingModule {}
