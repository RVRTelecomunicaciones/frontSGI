import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { TipoServicioModel } from '../domain/tipo-servicio.model';
import { TipoServicioRepository } from './tipo-servicio.repository';

@Injectable({
  providedIn: 'root',
})
export class TipoServicioUseCase implements UseCase<TipoServicioModel> {
  constructor(private tipoServicio: TipoServicioRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<TipoServicioModel>> {
    return this.tipoServicio.getByPageList(page_index, page_size);
  }

  insert(
    tipoServicio: Partial<TipoServicioModel>
  ): Observable<TipoServicioModel> {
    return this.tipoServicio.insert(tipoServicio);
  }

  update(
    id: number,
    user: Partial<TipoServicioModel>
  ): Observable<TipoServicioModel> {
    return this.tipoServicio.update(id, user);
  }

  delete(id: number): Observable<TipoServicioModel> {
    return this.tipoServicio.delete(id);
  }
}
