import axios, { AxiosError } from "axios";
import type { Config } from "./types";
import { AppError } from "./AppError";

export const post = async (config: Config<any>) => {
  const { path, body } = config;

  try {
    //TODO: MOVE THE URL INTO ITS OWN ENV VAR
    const resp = await axios.post("https://magiavidencia.dev" + path, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(resp.status, resp.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new AppError(error);
    }
    throw error;
  }
};
