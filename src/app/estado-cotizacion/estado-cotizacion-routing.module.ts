import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoCotizacionListComponent } from './pages/estado-cotizacion-list/estado-cotizacion-list.component';

const routes: Routes = [{ path: '', component: EstadoCotizacionListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoCotizacionRoutingModule {}
