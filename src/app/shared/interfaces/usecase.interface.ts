import { Observable } from 'rxjs';
import { Page } from './page.interface';

export interface UseCase<T> {
  delete(id: number): Observable<T>;
  getByPageList(page_index: number, page_size: number): Observable<Page<T>>;
  update(id: number, user: Partial<T>): Observable<T>;
  insert(user: Partial<T>): Observable<T>;
}
