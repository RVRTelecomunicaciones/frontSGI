import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesgloseComponent } from './desglose.component';

const routes: Routes = [
  {
    path: '',
    component: DesgloseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesgloseRoutingModule {}
