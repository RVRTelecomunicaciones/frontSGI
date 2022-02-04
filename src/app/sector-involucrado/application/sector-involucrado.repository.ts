import { Observable } from 'rxjs';
import { SectorInvolucradoModel } from '../domain/sector-involucrado.model';

export abstract class SectorInvolucradoRepository {
  abstract getByPageList(page: number, page_size: number): any;
  abstract insert(
    data: Partial<SectorInvolucradoModel>
  ): Observable<SectorInvolucradoModel>;
  abstract delete(id: number): Observable<SectorInvolucradoModel>;
  abstract update(
    id: number,
    sectorInvolucrado: Partial<SectorInvolucradoModel>
  ): Observable<SectorInvolucradoModel>;
}
