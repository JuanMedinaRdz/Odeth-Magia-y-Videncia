import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { State } from "./types";
import { AppError } from "@pipeline/AppError";
import { CustomError } from "@pipeline/types";

const initialState: State = {
  credentials: {
    user: "",
    password: "",
  },
  loading: false,
};

export const { actions, reducer } = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.credentials.user = action.payload.trim();
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.credentials.password = action.payload.trim();
    },
    validateUser: (state: State) => {
      state.loading = true;
      state.error = undefined;
    },
    loginError: (state: State, action: PayloadAction<CustomError>) => {
      state.loading = false;
      state.error = action.payload;
    },
    success: (state: State) => (state = initialState),
  },
});
