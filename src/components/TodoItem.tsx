import React from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{
  text: string;
  deleteTodo: () => void;
}> = ({ text, deleteTodo }) => {
  return <li onClick={deleteTodo}>{text}</li>;
};

export default TodoItem;
