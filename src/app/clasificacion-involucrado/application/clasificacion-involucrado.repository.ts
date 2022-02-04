import { Observable } from 'rxjs';
import { ClasificacionInvolucradoModel } from '../domain/clasificacion-involucrado.model';

export abstract class ClasificacionInvolucradoRepository {
  abstract getByPageList(page: number, page_size: number): any;
  abstract insert(
    data: Partial<ClasificacionInvolucradoModel>
  ): Observable<ClasificacionInvolucradoModel>;
  abstract delete(id: number): Observable<ClasificacionInvolucradoModel>;
  abstract update(
    id: number,
    sectorInvolucrado: Partial<ClasificacionInvolucradoModel>
  ): Observable<ClasificacionInvolucradoModel>;
}
