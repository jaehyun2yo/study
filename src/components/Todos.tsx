import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
const Todos: React.FC<{ items: Todo[]; deleteTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          text={item.text}
          deleteTodo={props.deleteTodo.bind(null, item.id)}
        />
        // <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
