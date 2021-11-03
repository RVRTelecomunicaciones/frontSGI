import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordinacionComponent } from './coordinacion.component';

const routes: Routes = [
  {
    path: '',
    component: CoordinacionComponent,
    /*children: [
      {
        path: 'coordinacion-list',
      component: CoordinacionListComponent,
      data: { label: 'Lista' },
      },
    ],*/
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinacionRoutingModule {}
