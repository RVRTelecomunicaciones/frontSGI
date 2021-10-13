import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

interface Tiposervicio {
  id: number;
  name: string;
}

@Component({
  selector: 'app-tiposervicio',
  templateUrl: './tiposervicio.component.html',
  styleUrls: ['./tiposervicio.component.css'],
})
export class TiposervicioComponent implements OnInit {
  tplModalButtonLoading = false;
  disabled = false;

  listOfData: Tiposervicio[] = [
    {
      id: 1,
      name: 'ANALISIS DE ACTIVOS',
    },
    {
      id: 2,
      name: 'CATALOGACIÓN DE MATERIALES',
    },
    {
      id: 3,
      name: 'ESTUDIO TECNICO DE MERMAS',
    },
    {
      id: 4,
      name: 'INFORME PERICIAL',
    },
    {
      id: 5,
      name: 'INVENTARIO Y CONCILIACIÓN',
    },
    {
      id: 6,
      name: 'PROYECTOS',
    },
    {
      id: 7,
      name: 'VALUACION DE BIENES MUEBLES',
    },
    {
      id: 8,
      name: 'VALUACION DE INMUEBLES',
    },
    {
      id: 9,
      name: 'VALUACION DE INTANGIGLES',
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
