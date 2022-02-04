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
import { SectorInvolucradoRepository } from '../application/sector-involucrado.repository';
import { SectorInvolucradoModel } from '../domain/sector-involucrado.model';

@Injectable()
export class SectorInvolucradoInfraestructure extends SectorInvolucradoRepository {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {
    super();
  }

  getByPageList(
    page: number,
    page_size: number
  ): Observable<Page<SectorInvolucradoModel>> {
    return this.http.get<Page<SectorInvolucradoModel>>(
      `${environment.API_URL}/sector-involucrados/list?order=DESC&page=${page}&take=${page_size}`
    );
  }

  insert(data: SectorInvolucradoModel): Observable<any> {
    let API_URL = `${environment.API_URL}/sector-involucrados`;
    return this.http
      .post(API_URL, data, { responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  update(id: number, data: any): Observable<any> {
    let API_URL = `${environment.API_URL}/sector-involucrados/${id}`;
    return this.http
      .patch(API_URL, data, { headers: this.httpHeaders, responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<any> {
    let API_URL = `${environment.API_URL}/sector-involucrados/${id}`;
    return this.http
      .delete(API_URL, { headers: this.httpHeaders, responseType: 'text' })
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
