import { Observable } from 'rxjs';
import { DesgloseModel } from '../domain/desglose.model';

export abstract class DesgloseRepository {
  abstract getByPageList(page: number, page_size: number): any;
  abstract insert(data: Partial<DesgloseModel>): Observable<DesgloseModel>;
  abstract update(
    id: number,
    desglose: Partial<DesgloseModel>
  ): Observable<DesgloseModel>;
  abstract delete(id: number): Observable<DesgloseModel>;
}
