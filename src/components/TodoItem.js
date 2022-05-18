import React, { useState } from "react";

const TodoItem = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit((prevEdit) => !prevEdit);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChangeUpdate = (e) => {
      const { value } = e.target;
      setNewValue(value);
    };

    const handleClickUpdateTodo = () => {
      onUpdate(item.id, newValue);
      setIsEdit((prevEdit) => !prevEdit);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChangeUpdate}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button className="button" onClick={handleEdit}>
          Edit
        </button>
        <button className="buttonDelete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    );
  };

  return <>{isEdit ? <FormEdit /> : <TodoElement />}</>;
};

export default TodoItem;
