import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { InvolucradoNaturalModel } from '../domain/involucrado-natural.model';
import { InvolucradoNaturalRepository } from './involucrado-natural.repository';

@Injectable({
  providedIn: 'root',
})
export class InvolucradoNaturalUseCase
  implements UseCase<InvolucradoNaturalModel>
{
  constructor(private involucrado: InvolucradoNaturalRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<InvolucradoNaturalModel>> {
    return this.involucrado.getByPageList(page_index, page_size);
  }

  insert(
    data: Partial<InvolucradoNaturalModel>
  ): Observable<InvolucradoNaturalModel> {
    return this.involucrado.insert(data);
  }

  update(
    id: number,
    data: Partial<InvolucradoNaturalModel>
  ): Observable<InvolucradoNaturalModel> {
    return this.involucrado.update(id, data);
  }

  delete(id: number): Observable<InvolucradoNaturalModel> {
    return this.involucrado.delete(id);
  }
}
