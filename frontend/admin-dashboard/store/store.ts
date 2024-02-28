import { configureStore } from "@reduxjs/toolkit";
import { reducer as loginReducer } from "../features/login/slicer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSagas";
const sagaMiddleware = createSagaMiddleware();

const devMode = process.env.NODE_ENV === "development";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      login: loginReducer,
    },
    devTools: devMode,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
