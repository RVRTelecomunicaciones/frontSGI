import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent,
        data: { label: 'Listado' },
      },
      {
        path: 'mantenimiento',
        component: MantenimientoComponent,
        data: { label: 'Mantenimiento' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
