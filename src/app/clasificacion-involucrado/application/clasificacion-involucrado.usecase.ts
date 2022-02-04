import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { ClasificacionInvolucradoModel } from '../domain/clasificacion-involucrado.model';
import { ClasificacionInvolucradoRepository } from './clasificacion-involucrado.repository';

@Injectable({
  providedIn: 'root',
})
export class ClasificacionInvolucradoUseCase
  implements UseCase<ClasificacionInvolucradoModel>
{
  constructor(
    private clasificacionInvolucrado: ClasificacionInvolucradoRepository
  ) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<ClasificacionInvolucradoModel>> {
    return this.clasificacionInvolucrado.getByPageList(page_index, page_size);
  }

  insert(
    data: Partial<ClasificacionInvolucradoModel>
  ): Observable<ClasificacionInvolucradoModel> {
    return this.clasificacionInvolucrado.insert(data);
  }

  update(
    id: number,
    data: Partial<ClasificacionInvolucradoModel>
  ): Observable<ClasificacionInvolucradoModel> {
    return this.clasificacionInvolucrado.update(id, data);
  }

  delete(id: number): Observable<ClasificacionInvolucradoModel> {
    return this.clasificacionInvolucrado.delete(id);
  }
}
