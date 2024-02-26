import { call, put, select, takeLatest } from "redux-saga/effects";
import { getLoginState } from "./selectors";
import { actions } from "./slicer";
import type { State } from "./types";

//this function will be replaced with a propper fetch call
export const validateUser = async () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 5000);
  });

function* validateLogin() {
  try {
    const { credentials }: State = yield select(getLoginState);

    if (credentials.user.length === 0) {
      yield put(actions.loginError("Invalid username"));
      return;
    }

    if (credentials.password.length === 0) {
      yield put(actions.loginError("Invalid password"));
      return;
    }

    yield call(validateUser);
    yield put(actions.success());
  } catch (error) {
    yield put(actions.loginError(JSON.stringify(error)));
  }
}

export function* loginSagas() {
  yield takeLatest(actions.loginError.type, validateLogin);
}
