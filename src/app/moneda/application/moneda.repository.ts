import { Observable } from 'rxjs';
import { MonedaModel } from '../domain/moneda.model';

export abstract class MonedaRepository {
  abstract getByPageList(page: number, page_size: number): any;
  abstract insert(data: Partial<MonedaModel>): Observable<MonedaModel>;
  abstract update(
    id: number,
    moneda: Partial<MonedaModel>
  ): Observable<MonedaModel>;
  abstract delete(id: number): Observable<MonedaModel>;
}
