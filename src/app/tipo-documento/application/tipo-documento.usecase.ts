import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { TipoDocumentoModel } from '../domain/tipo-documento.model';
import { TipoDocumentoRepository } from './tipo-documento.repository';

@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoUseCase implements UseCase<TipoDocumentoModel> {
  constructor(private tipoDocumento: TipoDocumentoRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<TipoDocumentoModel>> {
    return this.tipoDocumento.getByPageList(page_index, page_size);
  }

  insert(data: Partial<TipoDocumentoModel>): Observable<TipoDocumentoModel> {
    return this.tipoDocumento.insert(data);
  }

  update(
    id: number,
    data: Partial<TipoDocumentoModel>
  ): Observable<TipoDocumentoModel> {
    return this.tipoDocumento.update(id, data);
  }

  delete(id: number): Observable<TipoDocumentoModel> {
    return this.tipoDocumento.delete(id);
  }
}
