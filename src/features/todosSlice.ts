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
    removeTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    }
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
