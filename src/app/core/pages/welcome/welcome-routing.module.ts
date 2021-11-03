import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { TabCostosComponent } from './tab-costos/tab-costos.component';
import { TabGeneralComponent } from './tab-general/tab-general.component';
import { TabInvolucradosComponent } from './tab-involucrados/tab-involucrados.component';
import { TabServiciosComponent } from './tab-servicios/tab-servicios.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      /*{
        path: 'general',
        component: TabGeneralComponent,
        data: { label: 'General' },
      },
      {
        path: 'involucrados',
        component: TabInvolucradosComponent,
        data: { label: 'Involucrados' },
      },
      {
        path: 'servicios',
        component: TabServiciosComponent,
        data: { label: 'Servicios' },
      },
      {
        path: 'costos',
        component: TabCostosComponent,
        data: { label: 'Costos' },
      },*/
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
export class WelcomeRoutingModule {}
