/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item : </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Stack it</button>
    </form>
  );
};

export default TodoForm;
