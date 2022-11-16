import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformeDigitalizadosComponent } from './pages/informe-digitalizados/informe-digitalizados.component';

const routes: Routes = [
  {
    path: '',
    component: InformeDigitalizadosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformeDigitalizadosRoutingModule {}
