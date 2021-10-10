import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../interfaces/todo";

interface todosState {
  value: Todo[];
}

const initialState: todosState = {
  value: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
