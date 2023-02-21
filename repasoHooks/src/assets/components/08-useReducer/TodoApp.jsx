import { useEffect, useReducer, useState } from "react";
import "./todoapp.css";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [form, setForm] = useState({ description: "" });
  const { description } = form;
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setForm({ description: "" });
  };

  const handleSubmit = (e) => {
    if (description.trim().length <= 1) {
      return;
    }
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    dispatch({
      type: "add",
      payload: newTodo,
    });
    reset();
  };
  const handleToogle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };
  const handleDeleleItem = (id) => {
    dispatch({
      type: "remove_one",
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h3>Todo App ({todos.length})</h3>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
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
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Aprender ..."
              autoComplete="off"
              onChange={handleInputChange}
              value={description}
            />
            <button className="btn btn-outline-primary mt-1 btn-block">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
