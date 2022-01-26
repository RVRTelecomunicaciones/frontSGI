import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Page } from 'src/app/shared/interfaces/page.interface';
import { environment } from 'src/environments/environment';
import { AreaRepository } from '../application/area.repository';
import { AreaModel } from '../domain/area.model';

@Injectable()
export class AreaInfraestructure extends AreaRepository {
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {
    super();
  }
  getByPageList(
    page: number = 1,
    page_size: number = 10
  ): Observable<Page<AreaModel>> {
    return this.http.get<Page<AreaModel>>(
      `${environment.API_URL}/areas/list?order=DESC&page=${page}&take=${page_size}`
    );
  }

  // Agregar Area
  insert(data: AreaModel): Observable<any> {
    let API_URL = `${environment.API_URL}/areas`;
    return this.http
      .post(API_URL, data, { responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  // Update Area
  update(id: number, data: any): Observable<any> {
    let API_URL = `${environment.API_URL}/areas/${id}`;
    return this.http
      .patch(API_URL, data, { headers: this.httpHeaders, responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  // Delete Area
  delete(id: number): Observable<any> {
    let API_URL = `${environment.API_URL}/areas/${id}`;
    return this.http
      .delete(API_URL, { headers: this.httpHeaders, responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  // Error
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
