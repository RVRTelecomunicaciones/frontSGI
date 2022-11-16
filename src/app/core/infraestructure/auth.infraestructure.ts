import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tokens } from 'src/app/helpers/interfaces/tokens';
import { environment } from 'src/environments/environment';
import { AuthRepository } from '../domain/auth.repository';
import { Auth, AuthRequired } from '../domain/auth.model';
import { ITokens } from '../domain/tokens.interface';

@Injectable()
export class AuthInfraestructure extends AuthRepository {
  constructor(private http: HttpClient) {
    super();
  }
  login(auth: Auth): Observable<Tokens> {
    return this.http.post<ITokens>(`${environment.API_URL}/auth/login`, auth);
  }

  getNewAccessToken(refreshToken: string): Observable<ITokens> {
    return this.http.get<ITokens>(
      `${environment.API_URL}/auth/refresh/${refreshToken}`
    );
  }
}
