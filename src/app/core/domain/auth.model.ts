export interface AuthRequired {
  email: string;
  password: string;
}

export type AuthProperties = Required<AuthRequired>;

export class Auth {
  private readonly email!: string;
  private password!: string;
  constructor(properties: AuthProperties) {
    Object.assign(this, properties);
  }

  properties(): AuthProperties {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
