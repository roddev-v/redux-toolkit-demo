import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./slices/basic.slice";
import todosReducer from "./slices/todos.slice";

export const store = configureStore({
  reducer: { basic: basicReducer, todos: todosReducer },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
