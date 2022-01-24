import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalFormAreaComponent } from 'src/app/area/pages/area-add/area-add.component';
import { AreaComponent } from './area.component';

const routes: Routes = [
  {
    path: '',
    component: AreaComponent,
    children: [
      {
        path: 'add-area',
        component: ModalFormAreaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaRoutingModule {}
