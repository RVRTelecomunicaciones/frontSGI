import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { ServicioModel } from '../domain/servicio.model';

export abstract class ServicioRepository {
  abstract getByPageList(
    page: number,
    page_size: number
  ): Observable<Page<ServicioModel>>;
  abstract insert(data: Partial<ServicioModel>): Observable<ServicioModel>;
  abstract update(
    id: number,
    data: Partial<ServicioModel>
  ): Observable<ServicioModel>;
  abstract delete(id: number): Observable<ServicioModel>;
}
