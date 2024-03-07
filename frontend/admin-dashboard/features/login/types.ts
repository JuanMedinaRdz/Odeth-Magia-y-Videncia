import { CustomError } from "@pipeline/types";

export type Credentials = {
  user: string;
  password: string;
};

export type State = {
  credentials: Credentials;
  loading: boolean;
  error?: CustomError;
  isLogged: boolean;
  token?: string;
};
