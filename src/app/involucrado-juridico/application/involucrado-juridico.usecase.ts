import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { InvolucradoJuridicoModel } from '../domain/involucrado-juridico.model';
import { InvolucradoJuridicoRepository } from './involucrado-juridico.repository';

@Injectable({
  providedIn: 'root',
})
export class InvolucradoJuridicoUseCase
  implements UseCase<InvolucradoJuridicoModel>
{
  constructor(private involucrado: InvolucradoJuridicoRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<InvolucradoJuridicoModel>> {
    return this.involucrado.getByPageList(page_index, page_size);
  }

  insert(
    data: Partial<InvolucradoJuridicoModel>
  ): Observable<InvolucradoJuridicoModel> {
    return this.involucrado.insert(data);
  }

  update(
    id: number,
    data: Partial<InvolucradoJuridicoModel>
  ): Observable<InvolucradoJuridicoModel> {
    return this.involucrado.update(id, data);
  }

  delete(id: number): Observable<InvolucradoJuridicoModel> {
    return this.involucrado.delete(id);
  }
}
