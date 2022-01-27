import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { MonedaModel } from '../domain/moneda.model';
import { MonedaRepository } from './moneda.repository';

@Injectable({
  providedIn: 'root',
})
export class MonedaUseCase implements UseCase<MonedaModel> {
  constructor(private moneda: MonedaRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<MonedaModel>> {
    return this.moneda.getByPageList(page_index, page_size);
  }

  insert(data: Partial<MonedaModel>): Observable<MonedaModel> {
    return this.moneda.insert(data);
  }

  update(id: number, data: Partial<MonedaModel>): Observable<MonedaModel> {
    return this.moneda.update(id, data);
  }

  delete(id: number): Observable<MonedaModel> {
    return this.moneda.delete(id);
  }
}
