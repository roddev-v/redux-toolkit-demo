import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
  createAction,
} from "@reduxjs/toolkit";
import { AppState, store } from "..";

interface TodosState {
  todos: Todo[];
}

class Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const loadTodos = createAsyncThunk("todos/load", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.map((i: any) => i as Todo);
});

const todosAdapter = createEntityAdapter<Todo>({
  selectId: (todo) => todo?.id,
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdapter.getInitialState(),
  reducers: {
    removeRandom: (state) => {
      todosAdapter.removeOne(state, 10);
    },
    removeMore: (state) => {
      todosAdapter.removeMany(state, [11, 12, 13, 14, 15, 16, 17]);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadTodos.fulfilled.type,
      (state, action: PayloadAction<Todo[]>) => {
        todosAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const { removeRandom, removeMore } = todosSlice.actions;

export default todosSlice.reducer;
