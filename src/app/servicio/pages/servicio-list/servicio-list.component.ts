import { Component, OnInit, Pipe } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServicioUseCase } from '../../application/servicio.usecase';
import { ServicioModel } from '../../domain/servicio.model';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css'],
})
export class ServicioListComponent implements OnInit {
  pageIndex: number = 1;
  total: number = 1;
  pageSize = 10;
  loading = true;
  listOfServicios: ServicioModel[] = [];
  position!: ServicioModel;
  newPageIndex!: number;
  newPageSize!: number;
  constructor(private useCase: ServicioUseCase) {}

  ngOnInit(): void {
    this.getByPageServicios(this.pageIndex, this.pageSize);
  }

  getByPageServicios(page_index: number, page_size: number) {
    this.loading = true;

    this.useCase.getByPageList(page_index, page_size).subscribe((data: any) => {
      this.loading = false;
      this.total = data.meta.itemCount;
      this.listOfServicios = data.data;
    });
  }
  onQueryParamsChange(params: NzTableQueryParams) {
    const { pageSize, pageIndex } = params;
    this.newPageIndex = params.pageIndex;
    this.getByPageServicios(pageIndex, pageSize);
  }
}
