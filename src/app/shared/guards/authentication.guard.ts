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
import { Observable } from 'rxjs';
import { AuthApplication } from 'src/app/core/application/auth.application';
import { AuthRepository } from 'src/app/core/domain/auth.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanLoad {
  constructor(private auth: AuthApplication) {}

  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return this.validUserLogged();
  }

  canLoad(): boolean {
    return this.validUserLogged();
  }

  private validUserLogged(): boolean {
    const isLogged = this.auth.isUserLogged;
    if (!isLogged) {
      this.auth.logout();
    }

    return isLogged;
  }
}
