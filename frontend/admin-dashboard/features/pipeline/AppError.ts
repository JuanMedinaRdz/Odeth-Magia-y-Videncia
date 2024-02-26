import { AxiosError } from "axios";

export class AppError {
  messages: string[] | string;
  error: string;
  statusCode: number;

  constructor(e: AxiosError) {
    const data = e.response!.data as any;
    this.messages = data.message!;
    this.error = data.error;
    this.statusCode = data.statusCode;
  }
}
