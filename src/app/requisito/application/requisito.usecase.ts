import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { RequisitoModel } from '../domain/requisito.model';
import { RequisitoRepository } from './requisito.repository';

@Injectable({
  providedIn: 'root',
})
export class RequisitoUseCase implements UseCase<RequisitoModel> {
  constructor(private requisito: RequisitoRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<RequisitoModel>> {
    return this.requisito.getByPageList(page_index, page_size);
  }

  insert(data: Partial<RequisitoModel>): Observable<RequisitoModel> {
    return this.requisito.insert(data);
  }

  update(
    id: number,
    data: Partial<RequisitoModel>
  ): Observable<RequisitoModel> {
    return this.requisito.update(id, data);
  }

  delete(id: number): Observable<RequisitoModel> {
    return this.requisito.delete(id);
  }
}
