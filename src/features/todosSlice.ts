import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface todosState {
	value: string[];
}

const initialState: todosState = {
  value: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
