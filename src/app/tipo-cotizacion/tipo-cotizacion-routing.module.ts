import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoCotizacionListComponent } from './pages/tipo-cotizacion-list/tipo-cotizacion-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoCotizacionListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoCotizacionRoutingModule {}
