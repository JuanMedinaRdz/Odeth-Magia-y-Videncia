import { call, put, select, takeLatest } from "redux-saga/effects";
import { getLoginState } from "./selectors";
import { actions } from "./slicer";
import type { State } from "./types";
import { post } from "@pipeline/request";
import type { Config, CustomError } from "@pipeline/types";
import { AppError } from "@pipeline/AppError";
import { LOGIN_PATH } from "./constants";

const getError = (reason: string): CustomError => {
  return {
    messages: [reason],
    error: "login error",
    statusCode: 402,
  };
};

function* validateLogin() {
  try {
    const { credentials }: State = yield select(getLoginState);

    if (credentials.user.length === 0) {
      yield put(actions.loginError(getError("Invalid username")));
      return;
    }

    if (credentials.password.length === 0) {
      yield put(actions.loginError(getError("Invalid password")));
      return;
    }

    const { user, password } = credentials;

    const body = { name: user, password: password };
    const config: Config<typeof body> = {
      path: LOGIN_PATH,
      body,
    };
    yield call(post, config);
    yield put(actions.success());
  } catch (e) {
    if (e instanceof AppError) {
      const { messages, error, statusCode } = e;
      yield put(actions.loginError({ messages, error, statusCode }));
    } else {
      yield put(actions.loginError(getError("Error desconocido")));
    }
  }
}

export function* loginSagas() {
  yield takeLatest(actions.validateUser.type, validateLogin);
}
