import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, retry } from 'rxjs/operators';
import { AuthUseCase } from 'src/app/core/application/auth.usecase';
import { Tokens } from 'src/app/helpers/interfaces/tokens';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authUseCase: AuthUseCase = this.injector.get(AuthUseCase);
    const accessToken = authUseCase.accessToken;

    const requestCloned = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(requestCloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if (!(error.error instanceof ErrorEvent) && error.status === 409) {
          const refreshToken = authUseCase.getFieldValue('refreshToken');
          return authUseCase.getNewAccessToken(refreshToken).pipe(
            retry(3),
            mergeMap((response: Tokens) => {
              console.log(response.accessToken);
              authUseCase.setFieldValue('refreshToken', response.refreshToken);
              authUseCase.setFieldValue('accessToken', response.accessToken);

              const requestCloned = req.clone({
                headers: req.headers.append(
                  'Authorization',
                  `Bearer ${response.accessToken}`
                ),
              });

              return next.handle(requestCloned);
            })
          );
        } else if (error.status === 401) {
          return authUseCase.logout();
        } else {
          if (error.error && error.error.result) {
            return throwError(error.error.result);
          } else {
            return throwError(error);
          }
        }
      })
    );
  }
}
