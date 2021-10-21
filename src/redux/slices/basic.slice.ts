import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasicSliceState {
  counter: number;
  loading: boolean;
}

const initialState: BasicSliceState = {
  counter: 0,
  loading: false,
};

export const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    show: (state) => {
      state.loading = true;
    },
    hide: (state) => {
      state.loading = false;
    },
  },
});

export const { increment, decrement, incrementByAmount, show, hide } =
  basicSlice.actions;

export default basicSlice.reducer;
