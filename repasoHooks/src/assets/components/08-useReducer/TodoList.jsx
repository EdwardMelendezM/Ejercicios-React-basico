import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDeleleItem, handleToogle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleDeleleItem={handleDeleleItem}
          handleToogle={handleToogle}
          i={i}
        />
      ))}
    </ul>
  );
};

export default TodoList;
