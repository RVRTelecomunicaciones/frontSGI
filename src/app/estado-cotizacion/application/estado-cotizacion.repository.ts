import { Observable } from 'rxjs';
import { EstadoCotizacionModel } from '../domain/estado-cotizacion.model';

export abstract class EstadoCotizacionRepository {
  abstract getByPageList(page: number, page_size: number): any;

  abstract insert(
    data: Partial<EstadoCotizacionModel>
  ): Observable<EstadoCotizacionModel>;

  abstract update(
    id: number,
    data: Partial<EstadoCotizacionModel>
  ): Observable<EstadoCotizacionModel>;

  abstract delete(id: number): Observable<EstadoCotizacionModel>;
}
