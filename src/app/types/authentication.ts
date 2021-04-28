export interface Login {
  login: string;
  password: string;
  returnToken?: boolean;
}

export interface Token {
  email: string;
  id: string;
  login: string;
  role: Array<string>;
  token: string;
  type: string;
}
