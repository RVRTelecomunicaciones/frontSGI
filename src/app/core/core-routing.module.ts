import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './pages/core/core.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      /*{ path: '', pathMatch: 'full', redirectTo: '/cotizacion' },*/
      {
        path: 'usuario',
        loadChildren: () =>
          import('./pages/usuario/usuario.module').then((m) => m.UsuarioModule),
      },
      {
        path: 'area',
        loadChildren: () =>
          import('./pages/area/area.module').then((m) => m.AreaModule),
      },
      {
        path: 'rol',
        loadChildren: () =>
          import('./pages/rol/rol.module').then((m) => m.RolModule),
      },
      {
        path: 'desglose',
        loadChildren: () =>
          import('./pages/desglose/desglose.module').then(
            (m) => m.DesgloseModule
          ),
      },
      {
        path: 'moneda',
        loadChildren: () =>
          import('./pages/moneda/moneda.module').then((m) => m.MonedaModule),
      },
      {
        path: 'tipo-servicio',
        loadChildren: () =>
          import('./pages/tiposervicio/tiposervicio.module').then(
            (m) => m.TiposervicioModule
          ),
      },
      {
        path: 'servicio',
        loadChildren: () =>
          import('./pages/servicio/servicio.module').then(
            (m) => m.ServicioModule
          ),
      },
      {
        path: 'requisito',
        loadChildren: () =>
          import('./pages/requisito/requisito.module').then(
            (m) => m.RequisitoModule
          ),
      },
      {
        path: 'involucrado-natural',
        loadChildren: () =>
          import('./pages/involucrado-natural/involucrado-natural.module').then(
            (m) => m.InvolucradoNaturalModule
          ),
      },
      {
        path: 'cotizacion',
        loadChildren: () =>
          import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
      },
      {
        path: 'coordinacion',
        loadChildren: () =>
          import('./pages/coordinacion/coordinacion.module').then(
            (m) => m.CoordinacionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
