export type Credentials = {
  user: string;
  password: string;
};

export type State = {
  credentials: Credentials;
  loading: boolean;
  error?: string;
};
