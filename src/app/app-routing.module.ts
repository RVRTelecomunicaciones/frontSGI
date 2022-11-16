import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  { path: '', component: PageLoginComponent },

  // Other routes
  /* { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }, */
  /* {
    path: '404',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  }, */
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
    path: 'informes-digitalizados',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./informe-digitalizados/informe-digitalizados.module').then(
        (m) => m.InformeDigitalizadosModule
      ),
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
    path: 'tipo-documento',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./tipo-documento/tipo-documento.module').then(
        (m) => m.TipoDocumentoModule
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
  {
    path: 'servicio',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./servicio/servicio.module').then((m) => m.ServicioModule),
  },
  {
    path: 'requisito',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./requisito/requisito.module').then((m) => m.RequisitoModule),
  },
  {
    path: 'sector-involucrado',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./sector-involucrado/sector-involucrado.module').then(
        (m) => m.SectorInvolucradoModule
      ),
  },
  {
    path: 'clasificacion-involucrado',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import(
        './clasificacion-involucrado/clasificacion-involucrado.module'
      ).then((m) => m.ClasificacionInvolucradoModule),
  },
  {
    path: 'involucrado-natural',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./involucrado-natural/involucrado-natural.module').then(
        (m) => m.InvolucradoNaturalModule
      ),
  },
  {
    path: 'involucrado-juridico',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./involucrado-juridico/involucrado-juridico.module').then(
        (m) => m.InvolucradoJuridicoModule
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
