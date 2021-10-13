import {configureStore} from "@reduxjs/toolkit";
import basicReducer from "./slices/basic.slice";

export const store = configureStore({reducer: {basic: basicReducer}});

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
