import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposervicioComponent } from './tiposervicio.component';

const routes: Routes = [
  {
    path: '',
    component: TiposervicioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposervicioRoutingModule {}
