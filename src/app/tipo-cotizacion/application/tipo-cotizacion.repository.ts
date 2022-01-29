import { Observable } from 'rxjs';
import { TipoCotizacionModel } from '../domain/tipo-cotizacion.model';

export abstract class TipoCotizacionRepository {
  abstract getByPageList(page: number, page_size: number): any;

  abstract insert(
    data: Partial<TipoCotizacionModel>
  ): Observable<TipoCotizacionModel>;

  abstract update(
    id: number,
    tipoCotizacion: Partial<TipoCotizacionModel>
  ): Observable<TipoCotizacionModel>;

  abstract delete(id: number): Observable<TipoCotizacionModel>;
}
