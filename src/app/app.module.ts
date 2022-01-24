import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { CoreModule } from './core/core.module';
import { AuthInfraestructure } from './core/infraestructure/auth.infraestructure';
import { AuthRepository } from './core/application/auth.repository';
import { AuthUseCase } from './core/application/auth.usecase';
import { StorageRepository } from './core/application/storage.repository';
import { StorageInfraestructure } from './core/infraestructure/storage.infraestructure';
import { TokenInterceptor } from './shared/interceptor/token.interceptor';
import { NewComponentComponent } from './new-component/new-component.component';
/*import { DashboardModule } from './dashboard/dashboard.module';*/
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SharedModule } from './shared/shared.module';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { configLayout } from './config/constants/config.constant';
import { ConfigModule } from './config/modules/config.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { AreaRepository } from './area/application/area.repository';
import { AreaInfraestructure } from './area/infraestructure/area.infraestructure';

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent, NewComponentComponent],
  imports: [
    CoreModule,
    /*     DashboardModule,
     */ BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzAvatarModule,
    NzBadgeModule,
    SharedModule,
    ConfigModule.forRoot(configLayout),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    { provide: AreaRepository, useClass: AreaInfraestructure },
    { provide: AuthRepository, useClass: AuthInfraestructure },
    { provide: StorageRepository, useClass: StorageInfraestructure },
    AuthUseCase,
    { provide: NZ_I18N, useValue: es_ES },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
