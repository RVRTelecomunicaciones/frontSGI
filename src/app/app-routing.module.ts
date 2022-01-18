import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  /*   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, */
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    canLoad: [],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'user',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

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
