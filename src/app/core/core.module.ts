import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { IconsProviderModule } from '../icons-provider.module';
import { SharedModule } from '../shared/shared.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
/* import { PerfectScrollComponent } from './components/sidebar/perfect-scroll/perfect-scroll.component'; */

@NgModule({
  declarations: [
    LoginComponent,
    PageLoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzBadgeModule,
    SharedModule,
    RouterModule,
  ],

  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    IconsProviderModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
})
export class CoreModule {}
