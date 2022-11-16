import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { InformeDigitalizadoModel } from '../domain/informe-digitalizados.model';
import { TipoUsoModel } from '../domain/tipo-uso.model';

export abstract class InformeDigitalizadoRepository {
  abstract getByPageList(
    page: number,
    page_size: number
  ): Observable<Page<InformeDigitalizadoModel>>;
  abstract insert(
    data: Partial<InformeDigitalizadoModel>
  ): Observable<InformeDigitalizadoModel>;

  abstract listTipoUso(
    page_number: number,
    page_size: number
  ): Observable<Page<TipoUsoModel>>;

  abstract update(
    id: number,
    data: Partial<InformeDigitalizadoModel>
  ): Observable<InformeDigitalizadoModel>;
  abstract delete(id: number): Observable<InformeDigitalizadoModel>;
}
