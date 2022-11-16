import { Observable } from 'rxjs';
import { Tokens } from 'src/app/helpers/interfaces/tokens';
import { Auth } from './auth.model';
import { ITokens } from './tokens.interface';

export abstract class AuthRepository {
  abstract login(auth: Auth): Observable<ITokens>;
  abstract getNewAccessToken(refreshToken: string): Observable<Tokens>;
}
