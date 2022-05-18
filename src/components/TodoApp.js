import React, { useState } from "react";
import TodoItem from "./TodoItem";

import "./TodoApp.css";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTitle((prevTitle) => (prevTitle = value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodoList((prevList) => (prevList = [...todoList, newTodo]));
    setTitle((prevTitle) => (prevTitle = ""));
  };

  const handleUpdate = (id, value) => {
    const updateTodoList = [...todoList];
    const item = updateTodoList.find((item) => item.id === id);
    item.title = value;
    setTodoList(updateTodoList);
  };

  const handleDelete = (id) => {
    const deleteTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(deleteTodoList);
  };

  return (
    <div className="todoContainer">
      <form action="" className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          className="todoInput"
          value={title}
        />
        <input type="submit" value="Create ToDo" className="buttonCreate" />
      </form>
      <div className="todosContainer">
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
