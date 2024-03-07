import axios, { AxiosError, AxiosResponse } from "axios";
import type { Config } from "./types";
import { AppError } from "./AppError";

export const post = async (config: Config<any>): Promise<AxiosResponse> => {
  const { path, body } = config;

  try {
    //TODO: MOVE THE URL INTO ITS OWN ENV VAR
    const resp = await axios.post("https://magiavidencia.dev" + path, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new AppError(error);
    }
    throw error;
  }
};
