import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { InvolucradoJuridicoModel } from '../domain/involucrado-juridico.model';

export abstract class InvolucradoJuridicoRepository {
  abstract getByPageList(
    page: number,
    page_size: number
  ): Observable<Page<InvolucradoJuridicoModel>>;
  abstract insert(
    data: Partial<InvolucradoJuridicoModel>
  ): Observable<InvolucradoJuridicoModel>;
  abstract update(
    id: number,
    data: Partial<InvolucradoJuridicoModel>
  ): Observable<InvolucradoJuridicoModel>;
  abstract delete(id: number): Observable<InvolucradoJuridicoModel>;
}
