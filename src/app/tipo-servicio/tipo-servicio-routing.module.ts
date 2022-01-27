import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoServicioListComponent } from './pages/tipo-servicio-list/tipo-servicio-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoServicioListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoServicioRoutingModule {}
