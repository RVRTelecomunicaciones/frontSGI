import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesgloseRoutingModule } from './desglose-routing.module';
import { DesgloseComponent } from './desglose.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DesgloseComponent],
  imports: [CommonModule, DesgloseRoutingModule, SharedModule],
})
export class DesgloseModule {}