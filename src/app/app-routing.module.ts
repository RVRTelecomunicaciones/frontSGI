import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },*/
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'area',
    canLoad: [AuthenticationGuard],
    loadChildren: () => import('./area/area.module').then((m) => m.AreaModule),
  },
  {
    path: 'desglose',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./desglose/desglose.module').then((m) => m.DesgloseModule),
  },
  {
    path: 'moneda',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./moneda/moneda.module').then((m) => m.MonedaModule),
  },
  {
    path: 'tipo-servicio',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./tipo-servicio/tipo-servicio.module').then(
        (m) => m.TipoServicioModule
      ),
  },
  {
    path: 'tipo-cotizacion',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./tipo-cotizacion/tipo-cotizacion.module').then(
        (m) => m.TipoCotizacionModule
      ),
  },
  {
    path: 'estado-cotizacion',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./estado-cotizacion/estado-cotizacion.module').then(
        (m) => m.EstadoCotizacionModule
      ),
  },
  {
    path: 'estado-coordinacion',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./estado-coordinacion/estado-coordinacion.module').then(
        (m) => m.EstadoCoordinacionModule
      ),
  },
  /*{
    path: 'user',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },*/

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
