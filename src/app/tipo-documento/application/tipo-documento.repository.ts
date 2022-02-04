import { Observable } from 'rxjs';
import { TipoDocumentoModel } from '../domain/tipo-documento.model';

export abstract class TipoDocumentoRepository {
  abstract getByPageList(page: number, page_size: number): any;
  abstract insert(
    data: Partial<TipoDocumentoModel>
  ): Observable<TipoDocumentoModel>;
  abstract delete(id: number): Observable<TipoDocumentoModel>;
  abstract update(
    id: number,
    tipoDocumento: Partial<TipoDocumentoModel>
  ): Observable<TipoDocumentoModel>;
}
