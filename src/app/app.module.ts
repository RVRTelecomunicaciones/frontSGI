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
import { TipoServicioInfraestructure } from './tipo-servicio/infraestructure/tipo-servicio.infraestructure';
import { TipoServicioRepository } from './tipo-servicio/application/tipo-servicio.repository';
import { DesgloseRepository } from './desglose/application/desglose.repository';
import { DesgloseInfraestructure } from './desglose/infraestructure/desglose.infraestructure';
import { MonedaRepository } from './moneda/application/moneda.repository';
import { MonedaInfraestructure } from './moneda/infraestructure/moneda.infraestructure';
import { TipoCotizacionRepository } from './tipo-cotizacion/application/tipo-cotizacion.repository';
import { TipoCotizacionInfraestructure } from './tipo-cotizacion/infraestructure/tipo-cotizacion.infraestructure';
import { EstadoCotizacionRepository } from './estado-cotizacion/application/estado-cotizacion.repository';
import { EstadoCotizacionInfraestructure } from './estado-cotizacion/infraestructure/estado-cotizacion.infraestructure';
import { EstadoCoordinacionRepository } from './estado-coordinacion/application/estado-coordinacion.repository';
import { EstadoCoordinacionInfraestructure } from './estado-coordinacion/infraestructure/estado-coordinacion.infraestructure';
import { ServicioRepository } from './servicio/application/servicio.repository';
import { ServicioInfraestructure } from './servicio/infraestructure/servicio.infraestructure';
import { RequisitoRepository } from './requisito/application/requisito.repository';
import { RequisitoInfraestructure } from './requisito/infraestructure/requisito.infraestructure';
import { SectorInvolucradoRepository } from './sector-involucrado/application/sector-involucrado.repository';
import { SectorInvolucradoInfraestructure } from './sector-involucrado/infraestructure/sector-involucrado.infraestructure';
import { ClasificacionInvolucradoRepository } from './clasificacion-involucrado/application/clasificacion-involucrado.repository';
import { ClasificacionInvolucradoInfraestructure } from './clasificacion-involucrado/infraestructure/clasificacion-involucrado.infraestructure';
import { TipoDocumentoRepository } from './tipo-documento/application/tipo-documento.repository';
import { TipoDocumentoInfraestructure } from './tipo-documento/infraestructure/tipo-documento.infraestructure';
import { InvolucradoNaturalRepository } from './involucrado-natural/application/involucrado-natural.repository';
import { InvolucradoNaturalInfraestructure } from './involucrado-natural/infraestructure/involucrado-natural.infraestructure';
import { InvolucradoJuridicoRepository } from './involucrado-juridico/application/involucrado-juridico.repository';
import { InvolucradoJuridicoInfraestructure } from './involucrado-juridico/infraestructure/involucrado-juridico.intraestructure';

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent],
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
    { provide: DesgloseRepository, useClass: DesgloseInfraestructure },
    { provide: MonedaRepository, useClass: MonedaInfraestructure },
    { provide: TipoServicioRepository, useClass: TipoServicioInfraestructure },
    {
      provide: TipoDocumentoRepository,
      useClass: TipoDocumentoInfraestructure,
    },
    { provide: ServicioRepository, useClass: ServicioInfraestructure },
    {
      provide: TipoCotizacionRepository,
      useClass: TipoCotizacionInfraestructure,
    },
    {
      provide: EstadoCotizacionRepository,
      useClass: EstadoCotizacionInfraestructure,
    },
    {
      provide: EstadoCoordinacionRepository,
      useClass: EstadoCoordinacionInfraestructure,
    },
    { provide: RequisitoRepository, useClass: RequisitoInfraestructure },
    {
      provide: SectorInvolucradoRepository,
      useClass: SectorInvolucradoInfraestructure,
    },
    {
      provide: ClasificacionInvolucradoRepository,
      useClass: ClasificacionInvolucradoInfraestructure,
    },
    {
      provide: InvolucradoNaturalRepository,
      useClass: InvolucradoNaturalInfraestructure,
    },
    {
      provide: InvolucradoJuridicoRepository,
      useClass: InvolucradoJuridicoInfraestructure,
    },
    AuthUseCase,
    { provide: NZ_I18N, useValue: es_ES },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
