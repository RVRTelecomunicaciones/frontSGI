import { Observable } from 'rxjs';
import { Tokens } from 'src/app/helpers/interfaces/tokens';
import { AuthModel } from '../domain/auth.model';

export abstract class AuthRepository {
  abstract login(auth: AuthModel): Observable<Tokens>;
  abstract getNewAccessToken(refreshToken: string): Observable<Tokens>;
}
