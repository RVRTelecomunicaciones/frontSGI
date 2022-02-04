import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { environment } from 'src/environments/environment';
import { InvolucradoJuridicoRepository } from '../application/involucrado-juridico.repository';
import { InvolucradoJuridicoModel } from '../domain/involucrado-juridico.model';

@Injectable()
export class InvolucradoJuridicoInfraestructure extends InvolucradoJuridicoRepository {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {
    super();
  }

  getByPageList(
    page: number,
    page_size: number
  ): Observable<Page<InvolucradoJuridicoModel>> {
    return this.http.get<Page<InvolucradoJuridicoModel>>(
      `${environment.API_URL}/involucrado-juridicos/list?order=DESC&page=${page}&take=${page_size}`
    );
  }

  insert(data: Partial<InvolucradoJuridicoModel>): Observable<any> {
    let API_URL = `${environment.API_URL}/involucrado-juridicos`;
    return this.http
      .post(API_URL, data, { responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  update(id: number, data: any): Observable<any> {
    let API_URL = `${environment.API_URL}/involucrado-juridicos/${id}`;
    return this.http
      .patch(API_URL, data, { headers: this.httpHeaders, responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<any> {
    let API_URL = `${environment.API_URL}/involucrado-juridicos/${id}`;
    return this.http
      .delete(API_URL, {
        headers: this.httpHeaders,
        responseType: 'text',
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
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
