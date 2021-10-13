import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

interface Moneda {
  id: number;
  simbolo: string;
  name: string;
}

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css'],
})
export class MonedaComponent implements OnInit {
  tplModalButtonLoading = false;
  disabled = false;

  listOfData: Moneda[] = [
    {
      id: 1,
      simbolo: 'S/.',
      name: 'Sol',
    },
    {
      id: 2,
      simbolo: '$',
      name: 'Dolares Americanos',
    },
    {
      id: 2,
      simbolo: '€',
      name: 'Euro',
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
