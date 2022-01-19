import { Component } from '@angular/core';
import { ConfigLayout } from './config/interfaces/config-layout.interface';
import { ConfigService } from './config/services/config.service';
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
  isCollapsed = false;
  config!: ConfigLayout;

  constructor(
    private configService: ConfigService,
    private AuthUseCase: AuthUseCase
  ) {
    this.configService.configuration.subscribe(
      (response: ConfigLayout) => (this.config = response)
    );
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.AuthUseCase.isAuthenticated();
    console.log(this.isLoggedIn);

    if (this.isLoggedIn) {
      /*   const user = this.tokenStorageService.;



      this.username = user.username; */
    }
  }

  logout(): void {
    this.AuthUseCase.logout();

    /*this.tokenStorageService.clear();
    window.location.reload();*/
  }
}
