import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { DesgloseModel } from '../domain/desglose.model';
import { DesgloseRepository } from './desglose.repository';

@Injectable({
  providedIn: 'root',
})
export class DesgloseUseCase implements UseCase<DesgloseModel> {
  constructor(private desglose: DesgloseRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<DesgloseModel>> {
    return this.desglose.getByPageList(page_index, page_size);
  }

  insert(data: Partial<DesgloseModel>): Observable<DesgloseModel> {
    return this.desglose.insert(data);
  }

  update(id: number, data: Partial<DesgloseModel>): Observable<DesgloseModel> {
    return this.desglose.update(id, data);
  }

  delete(id: number): Observable<DesgloseModel> {
    return this.desglose.delete(id);
  }
}
