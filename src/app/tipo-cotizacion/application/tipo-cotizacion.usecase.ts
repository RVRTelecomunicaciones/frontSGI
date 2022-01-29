import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { TipoCotizacionModel } from '../domain/tipo-cotizacion.model';
import { TipoCotizacionRepository } from './tipo-cotizacion.repository';

@Injectable({
  providedIn: 'root',
})
export class TipoCotizacionUseCase implements UseCase<TipoCotizacionModel> {
  constructor(private tipoCotizacion: TipoCotizacionRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<TipoCotizacionModel>> {
    return this.tipoCotizacion.getByPageList(page_index, page_size);
  }

  insert(data: Partial<TipoCotizacionModel>): Observable<TipoCotizacionModel> {
    return this.tipoCotizacion.insert(data);
  }

  update(
    id: number,
    data: Partial<TipoCotizacionModel>
  ): Observable<TipoCotizacionModel> {
    return this.tipoCotizacion.update(id, data);
  }

  delete(id: number): Observable<TipoCotizacionModel> {
    return this.tipoCotizacion.delete(id);
  }
}
