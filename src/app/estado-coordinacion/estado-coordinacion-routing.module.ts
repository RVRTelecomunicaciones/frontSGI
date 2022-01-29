import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoCoordinacionListComponent } from './pages/estado-coordinacion-list/estado-coordinacion-list.component';

const routes: Routes = [
  {
    path: '',
    component: EstadoCoordinacionListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoCoordinacionRoutingModule {}
