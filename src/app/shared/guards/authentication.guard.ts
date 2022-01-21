import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { AuthUseCase } from 'src/app/core/application/auth.usecase';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanLoad {
  constructor(private auth: AuthUseCase) {}

  canLoad(): boolean {
    return this.auth.isAuthenticated();
    console.log('AUTHENTICADO');
  }
}
