import { Component } from '@angular/core';
import { AuthUseCase } from './core/application/auth.usecase';
import { StorageRepository } from './core/application/storage.repository';
import { StorageInfraestructure } from './core/infraestructure/storage.infraestructure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  isCollapsed = false;

  constructor(private AuthUseCase: AuthUseCase) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.AuthUseCase.isAuthenticated();
    console.log(this.isLoggedIn);

    if (this.isLoggedIn) {
      /*   const user = this.tokenStorageService.;



      this.username = user.username; */
    }
  }

  logout(): void {
    /*     this.tokenStorageService.clear();
     */ window.location.reload();
  }
}
