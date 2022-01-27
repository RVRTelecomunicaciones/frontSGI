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
    path: 'tipo-servicio',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./tipo-servicio/tipo-servicio.module').then(
        (m) => m.TipoServicioModule
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
