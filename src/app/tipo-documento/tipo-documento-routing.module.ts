import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoDocumentoListComponent } from './pages/tipo-documento-list/tipo-documento-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoDocumentoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoDocumentoRoutingModule {}
