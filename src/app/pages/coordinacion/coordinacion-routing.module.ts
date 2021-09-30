import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordinacionListComponent } from './coordinacion-list/coordinacion-list.component';
import { CoordinacionComponent } from './coordinacion.component';
import { CoordinacionModule } from './coordinacion.module';

const routes: Routes = [{
  path: '',
  component: CoordinacionComponent,
  children: [
    {
      path: 'coordinacion-list',
      component: CoordinacionListComponent,
      data: { label: 'Lista' },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinacionRoutingModule { }
