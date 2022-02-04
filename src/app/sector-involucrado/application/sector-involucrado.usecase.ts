import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { SectorInvolucradoModel } from '../domain/sector-involucrado.model';
import { SectorInvolucradoRepository } from './sector-involucrado.repository';

@Injectable({
  providedIn: 'root',
})
export class SectorInvolucradoUseCase
  implements UseCase<SectorInvolucradoModel>
{
  constructor(private sectorInvolucrado: SectorInvolucradoRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<SectorInvolucradoModel>> {
    return this.sectorInvolucrado.getByPageList(page_index, page_size);
  }

  insert(
    data: Partial<SectorInvolucradoModel>
  ): Observable<SectorInvolucradoModel> {
    return this.sectorInvolucrado.insert(data);
  }

  update(
    id: number,
    data: Partial<SectorInvolucradoModel>
  ): Observable<SectorInvolucradoModel> {
    return this.sectorInvolucrado.update(id, data);
  }

  delete(id: number): Observable<SectorInvolucradoModel> {
    return this.sectorInvolucrado.delete(id);
  }
}
