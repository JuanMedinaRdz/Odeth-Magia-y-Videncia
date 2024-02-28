import { all, fork } from "redux-saga/effects";
import { loginSagas } from "@features/login/sagas";

const rootSaga = function* () {
  yield all([
    fork(loginSagas),
    // Other forks
  ]);
};

export default rootSaga;
