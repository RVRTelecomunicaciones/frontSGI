import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { UseCase } from 'src/app/shared/interfaces/usecase.interface';
import { EstadoCoordinacionModel } from '../domain/estado-coordinacion.model';
import { EstadoCoordinacionRepository } from './estado-coordinacion.repository';

@Injectable({
  providedIn: 'root',
})
export class EstadoCoordinacionUseCase
  implements UseCase<EstadoCoordinacionModel>
{
  constructor(private estadoCoordinacion: EstadoCoordinacionRepository) {}

  getByPageList(
    page_index: number,
    page_size: number
  ): Observable<Page<EstadoCoordinacionModel>> {
    return this.estadoCoordinacion.getByPageList(page_index, page_size);
  }

  insert(
    data: Partial<EstadoCoordinacionModel>
  ): Observable<EstadoCoordinacionModel> {
    return this.estadoCoordinacion.insert(data);
  }

  update(
    id: number,
    data: Partial<EstadoCoordinacionModel>
  ): Observable<EstadoCoordinacionModel> {
    return this.estadoCoordinacion.update(id, data);
  }

  delete(id: number): Observable<EstadoCoordinacionModel> {
    return this.estadoCoordinacion.delete(id);
  }
}
