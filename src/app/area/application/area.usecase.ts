import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { AreaModel } from '../domain/area.model';
import { AreaRepository } from './area.repository';

@Injectable({
  providedIn: 'root',
})
export class AreaUseCase implements UseCase<AreaModel> {
  constructor(private area: AreaRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<AreaModel>> {
    return this.area.getByPageList(page_index, page_size);
  }

  update(id: number, user: Partial<AreaModel>): Observable<AreaModel> {
    return this.area.update(id, user);
  }

  getByPage(
    page_index: number,
    page_size: number
  ): Observable<Page<AreaModel>> {
    return this.area.getByPageList(page_index, page_size);
  }

  delete(id: number) {
    return this.area.delete(id);
  }

  insert(area: Partial<AreaModel>): Observable<AreaModel> {
    return this.area.insert(area);
  }
}
