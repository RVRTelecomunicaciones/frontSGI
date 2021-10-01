import { NgModule } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { TabGeneralComponent } from './tab-general/tab-general.component';
import { TabInvolucradosComponent } from './tab-involucrados/tab-involucrados.component';
import { TabServiciosComponent } from './tab-servicios/tab-servicios.component';
import { TabCostosComponent } from './tab-costos/tab-costos.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzButtonModule,
    NzTabsModule,
    NzCardModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    ReactiveFormsModule,
    FormsModule,
    NzGridModule,
    NzDividerModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzSelectModule,
    NzRadioModule,
    NzCheckboxModule,
  ],
  declarations: [
    WelcomeComponent,
    TabGeneralComponent,
    TabInvolucradosComponent,
    TabServiciosComponent,
    TabCostosComponent,
  ],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
