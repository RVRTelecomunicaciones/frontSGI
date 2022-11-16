import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { environment } from 'src/environments/environment';
import { InformeDigitalizadoRepository } from '../application/informe-digitalizado.repository';
import { InformeDigitalizadoModel } from '../domain/informe-digitalizados.model';
import { TipoUsoModel } from '../domain/tipo-uso.model';

@Injectable()
export class InformeDigitalizadoInfraestructure extends InformeDigitalizadoRepository {
  getByPageList(
    page: number,
    page_size: number
  ): Observable<Page<InformeDigitalizadoModel>> {
    return this.http.get<Page<InformeDigitalizadoModel>>(
      `${environment.API_URL}/tipo-uso/list?order=DESC&page=${page}&take=${page_size}`
    );
  }
  insert(
    data: Partial<InformeDigitalizadoModel>
  ): Observable<InformeDigitalizadoModel> {
    throw new Error('Method not implemented.');
  }
  listTipoUso(
    page_number: number,
    page_size: number
  ): Observable<Page<TipoUsoModel>> {
    return this.http.get<Page<TipoUsoModel>>(
      `${environment.API_URL}/tipo-uso/listall?order=DESC&page=${page_number}&take=${page_size}`
    );
  }
  update(
    id: number,
    data: Partial<InformeDigitalizadoModel>
  ): Observable<InformeDigitalizadoModel> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<InformeDigitalizadoModel> {
    throw new Error('Method not implemented.');
  }

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {
    super();
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
