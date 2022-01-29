import { Observable } from 'rxjs';
import { EstadoCoordinacionModel } from '../domain/estado-coordinacion.model';

export abstract class EstadoCoordinacionRepository {
  abstract getByPageList(page: number, page_size: number): any;

  abstract insert(
    data: Partial<EstadoCoordinacionModel>
  ): Observable<EstadoCoordinacionModel>;

  abstract update(
    id: number,
    data: Partial<EstadoCoordinacionModel>
  ): Observable<EstadoCoordinacionModel>;

  abstract delete(id: number): Observable<EstadoCoordinacionModel>;
}
