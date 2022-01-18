import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { LoginComponent } from './pages/login/login.component';
import { IconsProviderModule } from '../icons-provider.module';
import { SharedModule } from '../shared/shared.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';

@NgModule({
  declarations: [LoginComponent, PageLoginComponent],
  imports: [CommonModule, IconsProviderModule, SharedModule],

  exports: [IconsProviderModule],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
})
export class CoreModule {}
