import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import type { State } from "./types";

export const getLoginState = (state: RootState): State => state.login;

export const getUser = createSelector(getLoginState, (state) => {
  return {
    creds: state.credentials,
    error: state.error,
    loading: state.loading,
  };
});

export const isLogged = createSelector(
  getLoginState,
  (state): boolean => state.isLogged
);
