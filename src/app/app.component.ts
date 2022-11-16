import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigLayout } from './config/interfaces/config-layout.interface';
import { ConfigService } from './config/services/config.service';
import { AuthApplication } from './core/application/auth.application';
import { StorageRepository } from './core/domain/storage.repository';
import { StorageInfraestructure } from './core/infraestructure/storage.infraestructure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private roles: string[] = [];
  valueEmittedFromChildComponent: boolean = false;
  mobileEmittedFromChildComponent: boolean = false;

  config!: ConfigLayout;
  isLoggedIn = false;

  constructor(
    private configService: ConfigService,
    private authUseCase: AuthApplication
  ) {
    this.configService.configuration
      .pipe(tap((data) => console.log('Data' + JSON.stringify(data))))
      .subscribe((response: ConfigLayout) => (this.config = response));
  }

  ngOnInit(): void {
    /*  this.isLoggedIn = !!this.authUseCase.getToken();
    console.log(this.isLoggedIn); */
    /* if (this.isLoggedIn)
     */
  }
  logout(): void {
    this.authUseCase.logout();
  }

  parentEventHandlerFunction(valueEmitted: any) {
    valueEmitted === 'true'
      ? (this.valueEmittedFromChildComponent = true)
      : (this.valueEmittedFromChildComponent = false);
  }
  parentMobileEventHandlerFunction(valueEmitted: any) {
    valueEmitted === 'true'
      ? (this.mobileEmittedFromChildComponent = true)
      : (this.mobileEmittedFromChildComponent = false);
  }
}
