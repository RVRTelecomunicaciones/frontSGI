import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificacionInvolucradoListComponent } from './pages/clasificacion-involucrado-list/clasificacion-involucrado-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClasificacionInvolucradoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasificacionInvolucradoRoutingModule {}
