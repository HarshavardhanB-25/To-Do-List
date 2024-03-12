/* eslint-disable react/prop-types */
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onToggle(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button onClick={() => onDelete(todo.id)} className="btn btn-danger">
        Thati Thookiru
      </button>
    </li>
  );
};

export default TodoItem;
