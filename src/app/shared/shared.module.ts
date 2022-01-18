import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';
import { PasswordInputComponent } from './component/password-input.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzGridModule,
    NzSpinModule,
    NzCascaderModule,
    NzDividerModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzRadioModule,
    NzCheckboxModule,
    NzAlertModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzGridModule,
    NzSpinModule,
    NzCascaderModule,
    NzDividerModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzRadioModule,
    NzCheckboxModule,
    NzAlertModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
})
export class SharedModule {}
