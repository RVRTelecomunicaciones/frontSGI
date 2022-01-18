import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: PageLoginComponent },
  {
    path: 'dashboard',
    canLoad: [AuthenticationGuard],
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  /* {
    path: 'medics',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./medics/medics.module').then((m) => m.MedicsModule),
  }, */
  { path: '**', redirectTo: 'login' },
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
