import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioListComponent } from './pages/servicio-list/servicio-list.component';

const routes: Routes = [{ path: '', component: ServicioListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioRoutingModule {}
