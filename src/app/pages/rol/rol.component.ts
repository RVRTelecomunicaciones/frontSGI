import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

interface Rol {
  id: number;
  name: string;
}

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
})
export class RolComponent implements OnInit {
  tplModalButtonLoading = false;
  disabled = false;

  listOfData: Rol[] = [
    {
      id: 1,
      name: 'GERENTE',
    },
    {
      id: 2,
      name: 'SUB GERENTE',
    },
    {
      id: 3,
      name: 'JEFE',
    },
    {
      id: 4,
      name: 'COORDINADOR',
    },
    {
      id: 5,
      name: 'VENDEDOR',
    },
    {
      id: 6,
      name: 'PERITO',
    },
    {
      id: 7,
      name: 'ASISTENTE',
    },
    {
      id: 8,
      name: 'PRACTICANTE',
    },
  ];
  listOfDisplayData = [...this.listOfData];

  constructor(private modal: NzModalService) {}

  ngOnInit(): void {}

  createTplModal(
    tplTitle: TemplateRef<{}>,
    tplContent: TemplateRef<{}>,
    tplFooter: TemplateRef<{}>
  ): void {
    this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context',
      },
      nzOnOk: () => console.log('Click ok'),
    });
  }

  destroyTplModal(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      modelRef.destroy();
    }, 1000);
  }
}
