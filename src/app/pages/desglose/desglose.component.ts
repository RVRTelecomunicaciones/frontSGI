import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

interface Desglose {
  id: number;
  name: string;
}

@Component({
  selector: 'app-desglose',
  templateUrl: './desglose.component.html',
  styleUrls: ['./desglose.component.css'],
})
export class DesgloseComponent implements OnInit {
  tplModalButtonLoading = false;
  disabled = false;

  listOfData: Desglose[] = [
    {
      id: 1,
      name: '100%',
    },
    {
      id: 2,
      name: '50% - 50%',
    },
    {
      id: 3,
      name: '50% - 30% - 20%',
    },
    {
      id: 4,
      name: '40% - 30% - 30%',
    },
    {
      id: 5,
      name: '30 Días',
    },
    {
      id: 6,
      name: '60 Días',
    },
    {
      id: 7,
      name: 'Al Finalizar',
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
