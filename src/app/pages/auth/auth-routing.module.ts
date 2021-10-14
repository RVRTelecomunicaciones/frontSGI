import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AUTH_ROUTER: Routes = [
  /*  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTER)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
