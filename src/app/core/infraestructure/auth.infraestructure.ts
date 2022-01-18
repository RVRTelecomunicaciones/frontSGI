import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModel } from 'src/app/core/domain/auth.model';
import { Tokens } from 'src/app/helpers/interfaces/tokens';
import { environment } from 'src/environments/environment';
import { AuthRepository } from '../application/auth.repository';

@Injectable()
export class AuthInfraestructure extends AuthRepository {
  constructor(private http: HttpClient) {
    super();
  }
  login(auth: AuthModel): Observable<Tokens> {
    return this.http.post<Tokens>(`${environment.API_URL}/auth/login`, auth);
  }

  getNewAccessToken(refreshToken: string): Observable<Tokens> {
    return this.http.get<Tokens>(
      `${environment.API_URL}/auth/refresh/${refreshToken}`
    );
  }
}
