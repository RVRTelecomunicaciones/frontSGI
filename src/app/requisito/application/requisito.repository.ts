import { Observable } from 'rxjs';
import { RequisitoModel } from '../domain/requisito.model';

export abstract class RequisitoRepository {
  abstract getByPageList(page: number, page_size: number): any;
  abstract insert(data: Partial<RequisitoModel>): Observable<RequisitoModel>;
  abstract update(
    id: number,
    data: Partial<RequisitoModel>
  ): Observable<RequisitoModel>;
  abstract delete(id: number): Observable<RequisitoModel>;
}
