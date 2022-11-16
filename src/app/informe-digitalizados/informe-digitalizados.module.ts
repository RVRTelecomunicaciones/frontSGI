import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeDigitalizadosRoutingModule } from './informe-digitalizados-routing.module';
import { InformeDigitalizadosComponent } from './pages/informe-digitalizados/informe-digitalizados.component';
import { SharedModule } from '../shared/shared.module';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { CaratulaComponent } from './pages/caratula/caratula.component';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { IntroduccionUbicacionComponent } from './pages/introduccion-ubicacion/introduccion-ubicacion.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../shared/directive/directive.module';

@NgModule({
  declarations: [
    InformeDigitalizadosComponent,
    CaratulaComponent,
    IntroduccionComponent,
    IntroduccionUbicacionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InformeDigitalizadosRoutingModule,
    NzUploadModule,
    NzStepsModule,
    DirectiveModule,
  ],
  exports: [CaratulaComponent, InformeDigitalizadosComponent],
})
export class InformeDigitalizadosModule {}
