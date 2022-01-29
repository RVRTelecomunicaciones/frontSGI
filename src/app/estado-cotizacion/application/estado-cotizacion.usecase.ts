import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { EstadoCotizacionModel } from '../domain/estado-cotizacion.model';
import { EstadoCotizacionRepository } from './estado-cotizacion.repository';

@Injectable({
  providedIn: 'root',
})
export class EstadoCotizacionUseCase implements UseCase<EstadoCotizacionModel> {
  constructor(private estadoCotizacion: EstadoCotizacionRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<EstadoCotizacionModel>> {
    return this.estadoCotizacion.getByPageList(page_index, page_size);
  }

  insert(
    data: Partial<EstadoCotizacionModel>
  ): Observable<EstadoCotizacionModel> {
    return this.estadoCotizacion.insert(data);
  }

  update(
    id: number,
    data: Partial<EstadoCotizacionModel>
  ): Observable<EstadoCotizacionModel> {
    return this.estadoCotizacion.update(id, data);
  }

  delete(id: number): Observable<EstadoCotizacionModel> {
    return this.estadoCotizacion.delete(id);
  }
}
