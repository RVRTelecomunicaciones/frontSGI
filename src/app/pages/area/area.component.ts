import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

interface Area {
  id: number;
  name: string;
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  tplModalButtonLoading = false;
  disabled = false;

  listOfData: Area[] = [
    {
      id: 1,
      name: 'GERENCIA',
    },
    {
      id: 2,
      name: 'AUDITORIA',
    },
    {
      id: 3,
      name: 'COMERCIAL',
    },
    {
      id: 4,
      name: 'OPERACIONES',
    },
    {
      id: 5,
      name: 'SISTEMAS',
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
