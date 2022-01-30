import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { ServicioModel } from '../domain/servicio.model';
import { ServicioRepository } from './servicio.repository';

@Injectable({
  providedIn: 'root',
})
export class ServicioUseCase implements UseCase<ServicioModel> {
  constructor(private servicio: ServicioRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<ServicioModel>> {
    return this.servicio.getByPageList(page_index, page_size);
  }

  insert(data: Partial<ServicioModel>): Observable<ServicioModel> {
    return this.servicio.insert(data);
  }

  update(id: number, data: Partial<ServicioModel>): Observable<ServicioModel> {
    return this.servicio.update(id, data);
  }

  delete(id: number): Observable<ServicioModel> {
    return this.servicio.delete(id);
  }
}
