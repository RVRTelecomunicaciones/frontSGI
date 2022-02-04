import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorInvolucradoListComponent } from './pages/sector-involucrado-list/sector-involucrado-list.component';

const routes: Routes = [
  {
    path: '',
    component: SectorInvolucradoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectorInvolucradoRoutingModule {}
