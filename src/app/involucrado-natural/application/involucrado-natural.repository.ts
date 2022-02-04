import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { InvolucradoNaturalModel } from '../domain/involucrado-natural.model';

export abstract class InvolucradoNaturalRepository {
  abstract getByPageList(
    page: number,
    page_size: number
  ): Observable<Page<InvolucradoNaturalModel>>;
  abstract insert(
    data: Partial<InvolucradoNaturalModel>
  ): Observable<InvolucradoNaturalModel>;
  abstract update(
    id: number,
    data: Partial<InvolucradoNaturalModel>
  ): Observable<InvolucradoNaturalModel>;
  abstract delete(id: number): Observable<InvolucradoNaturalModel>;
}
