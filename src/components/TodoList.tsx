import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todosSlice";
import { Todo } from "../interfaces/todo";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}{" "}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
