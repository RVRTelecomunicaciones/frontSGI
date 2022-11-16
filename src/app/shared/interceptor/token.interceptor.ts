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
import { AuthApplication } from 'src/app/core/application/auth.application';
import { StorageApplication } from 'src/app/core/application/storage.application';
import { ITokens } from 'src/app/core/domain/tokens.interface';
import { Tokens } from 'src/app/helpers/interfaces/tokens';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly storage: StorageApplication,
    private readonly injector: Injector
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /*   const authUseCase: AuthApplication = this.injector.get(AuthUseCase);
    const accessToken = authUseCase.accessToken;
 */
    const accessToken = this.storage.getField('accessToken');

    const requestCloned = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(requestCloned).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          return this.handlerErrorBackend(error, req, next);
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }
  handlerErrorBackend(
    error: HttpErrorResponse,
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    const auth = this.injector.get(AuthApplication);

    if (error.status === 409) {
      const refreshToken = this.storage.getField('refreshToken');

      return auth.getNewAccessToken(refreshToken!).pipe(
        retry(3),
        mergeMap((tokens: ITokens) => {
          this.storage.setField('accessToken', tokens.accessToken);
          this.storage.setField('refreshToken', tokens.refreshToken);

          const clonedRequest = req.clone({
            headers: req.headers.append(
              'Authorization',
              `Bearer ${tokens.accessToken}`
            ),
          });

          return next.handle(clonedRequest);
        })
      );
    } else if (error.status === 401) {
      auth.logout();
    }

    return throwError(() => new Error('Unauthorized'));
  }
}

/* if (!(error.error instanceof ErrorEvent) && error.status === 409) {
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
} */
