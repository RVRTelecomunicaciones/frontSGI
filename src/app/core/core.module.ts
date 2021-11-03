import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { CoreComponent } from './pages/core/core.component';
import { LoginComponent } from './pages/login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [CoreComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],

  exports: [
    CoreComponent,
    LoginComponent,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
})
export class CoreModule {}
