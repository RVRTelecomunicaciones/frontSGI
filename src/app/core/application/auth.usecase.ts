import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthModel } from 'src/app/core/domain/auth.model';
import { Tokens } from 'src/app/helpers/interfaces/tokens';
import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';

@Injectable()
export class AuthUseCase {
  private userLogged = false;

  constructor(
    private repository: AuthRepository,
    private router: Router,
    private storage: StorageRepository
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  async populate() {
    // If JWT detected, attempt to get & store user's info
    const token = this.storage.getStorage('accessToken');
    console.log(`Token: ${token}`);
    if (token) {
      /*       await this.updateCurrentUserUsingToken();
       */
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }
  purgeAuth() {
    // Remove JWT from localstorage
    this.storage.clear();
    /*     this.stateService.setCurrentUser(null);
     */
  }

  login(auth: AuthModel) {
    //this.router.navigate(['/dashboard']);

    return this.repository.login(auth).subscribe((response: Tokens) => {
      this.storage.setStorage('accessToken', response.accessToken);
      this.storage.setStorage('refreshToken', response.refreshToken);
      this.userLogged = true;
      this.router.navigate(['/dashboard']);
    });
  }

  logout(): Observable<any> {
    this.storage.clear();
    this.userLogged = false;
    this.router.navigate(['/login']);

    return of();
  }

  isAuthenticated(): boolean {
    return this.userLogged || !!this.storage.getStorage('accessToken');
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem('accessToken');
  }

  isAuthorized(rolesAllowed: string[]): boolean {
    const rolesUser = this.storage.getFieldInToken('roles');

    let hasRoleAllowed = false;
    for (let ind = 0; ind < rolesAllowed.length; ind++) {
      if (rolesUser.includes(rolesAllowed[ind])) {
        hasRoleAllowed = true;
        break;
      }
    }

    return hasRoleAllowed;
  }

  get accessToken(): string {
    return '' + this.storage.getStorage('accessToken');
  }

  getNewAccessToken(refreshToken: string): Observable<Tokens> {
    return this.repository.getNewAccessToken(refreshToken);
  }

  getFieldValue(field: string): string {
    return '' + this.storage.getStorage(field);
  }

  setFieldValue(field: string, value: string) {
    this.storage.setStorage(field, value);
  }

  getRoles() {
    return this.storage.getFieldInToken('roles');
  }
}
