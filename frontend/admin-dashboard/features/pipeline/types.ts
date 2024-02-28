export type Config<T> = {
  path: string;
  body?: T;
};

export type CustomError = {
  messages: string[] | string;
  message?: string[] | string;
  error: string;
  statusCode: number;
};
