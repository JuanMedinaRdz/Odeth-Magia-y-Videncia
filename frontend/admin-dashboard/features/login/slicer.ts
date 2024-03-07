import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { State } from "./types";
import { CustomError } from "@pipeline/types";

const initialState: State = {
  credentials: {
    user: "",
    password: "",
  },
  loading: false,
  isLogged: false,
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
      state.isLogged = false;
    },
    success: (state: State, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = undefined;
      state.credentials = {
        user: "",
        password: "",
      };
      state.isLogged = true;
      state.token = action.payload;
    },
  },
});
