import { Observable } from 'rxjs';
import { TipoServicioModel } from '../domain/tipo-servicio.model';

export abstract class TipoServicioRepository {
  abstract getByPageList(page: number, page_size: number): any;
  abstract insert(
    data: Partial<TipoServicioModel>
  ): Observable<TipoServicioModel>;
  abstract delete(id: number): Observable<TipoServicioModel>;
  abstract update(
    id: number,
    tipoServicio: Partial<TipoServicioModel>
  ): Observable<TipoServicioModel>;
}
