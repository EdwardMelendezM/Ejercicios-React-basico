const TodoListItem = ({ todo, i, handleDeleleItem, handleToogle }) => {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToogle(todo.id)}
      >
        {i + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleleItem(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;
