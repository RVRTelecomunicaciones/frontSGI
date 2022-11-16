import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { InformeDigitalizadoModel } from '../domain/informe-digitalizados.model';
import { TipoUsoModel } from '../domain/tipo-uso.model';
import { InformeDigitalizadoRepository } from './informe-digitalizado.repository';

@Injectable({
  providedIn: 'root',
})
export class InformeDigitalizadoUseCase
  implements UseCase<InformeDigitalizadoModel>
{
  constructor(private idigitalizado: InformeDigitalizadoRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<InformeDigitalizadoModel>> {
    return this.idigitalizado.getByPageList(page_index, page_size);
  }
  getByPageListUso(
    page_index: number,
    page_size: number
  ): Observable<Page<TipoUsoModel>> {
    return this.idigitalizado.listTipoUso(page_index, page_size);
  }
  insert(
    data: Partial<InformeDigitalizadoModel>
  ): Observable<InformeDigitalizadoModel> {
    return this.idigitalizado.insert(data);
  }

  update(
    id: number,
    data: Partial<InformeDigitalizadoModel>
  ): Observable<InformeDigitalizadoModel> {
    return this.idigitalizado.update(id, data);
  }

  delete(id: number): Observable<InformeDigitalizadoModel> {
    return this.idigitalizado.delete(id);
  }
}
