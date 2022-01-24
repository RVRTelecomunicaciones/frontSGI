import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AreaRepository } from '../../application/area.repository';
import { AreaModel } from '../../domain/area.model';
import { ModalFormAreaComponent } from '../area-add/area-add.component';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css'],
})
export class AreaListComponent implements OnInit {
  listOfAreas: AreaModel[] = [];
  pageIndex: number = 1;
  total: number = 1;
  pageSize = 10;
  loading = true;
  position!: AreaModel;

  constructor(
    private areaRepository: AreaRepository,
    private modal: NzModalService
  ) {}

  getByPageAreas(page_index: number, page_size: number) {
    this.loading = true;

    this.areaRepository
      .getByPageListAreas(page_index, page_size)
      .subscribe((data: any) => {
        console.log(data);
        this.loading = false;
        this.total = data.meta.itemCount;
        this.listOfAreas = data.data;
      });
  }
  ngOnInit(): void {
    this.getByPageAreas(this.pageIndex, this.pageSize);
  }

  onQueryParamsChange(params: NzTableQueryParams) {
    const { pageSize, pageIndex } = params;
    this.getByPageAreas(pageIndex, pageSize);
  }

  openModalWithComponent(
    position: AreaModel,
    formMode: string,
    isAddNew: boolean
  ) {
    const nzModalref = this.modal.create({
      nzTitle: 'MANTENIMIENTO DE AREAS',
      nzContent: ModalFormAreaComponent,
      nzMaskClosable: false,
      nzClosable: false,
    });

    nzModalref.componentInstance!.position = position;
    nzModalref.componentInstance!.formMode = formMode;
    nzModalref.componentInstance!.isAddNew = isAddNew;

    nzModalref.afterClose.subscribe((res) => {
      if (res === undefined) {
        return;
      }
      console.log(res);
    });
  }
}

/* "meta": {
  "page": 1,
  "take": 10,
  "itemCount": 12,
  "pageCount": 2,
  "hasPreviousPage": true,
  "hasNextPage": false

  http://localhost:8080/areas/list?order=ASC&page=1&take=10

} */
