import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import { addTodo } from "./features/todosSlice";
import { Todo } from "./interfaces/todo";
import { RootState } from "./store";

function App() {
  const [todo, setTodo] = React.useState("");
  const todos = useSelector((state: RootState) => state.todos.value);

  const dispatch = useDispatch();

  const submitTodo = () => {
    const newTodo: Todo = {
      id: Math.random(),
      title: todo
    }

    dispatch(addTodo(newTodo));
  }

  return (
    <>
      <h1>Todos:</h1>
      <TodoList todos={todos} />
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={submitTodo}>Add Todo</button>
    </>
  );
}

export default App;
