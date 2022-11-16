import { Auth, AuthProperties } from './auth.model';

export class AuthFactory {
  static create(email: string, password: string): Auth {
    const authProperties: AuthProperties = {
      email,
      password,
    };

    if (email.trim() === '') {
      throw new Error('Correo no puede ser vacío');
    }

    if (password.trim() === '') {
      throw new Error('Password no puede ser vacío');
    }

    return new Auth(authProperties);
  }
}
