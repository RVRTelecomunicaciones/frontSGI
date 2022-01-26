import { Observable } from 'rxjs';
import { AreaModel } from '../domain/area.model';

export abstract class AreaRepository {
  abstract getByPageList(page: number, page_size: number): any;
  abstract insert(data: Partial<AreaModel>): Observable<AreaModel>;
  abstract delete(id: number): Observable<AreaModel>;
  abstract update(id: number, area: Partial<AreaModel>): Observable<AreaModel>;
}
