import { Observable } from 'rxjs';
import { ServicioModel } from '../domain/servicio.model';

export abstract class ServicioRepository {
  abstract getByPageList(page: number, page_size: number): any;
  abstract insert(data: Partial<ServicioModel>): Observable<ServicioModel>;
  abstract update(
    id: number,
    moneda: Partial<ServicioModel>
  ): Observable<ServicioModel>;
  abstract delete(id: number): Observable<ServicioModel>;
}
