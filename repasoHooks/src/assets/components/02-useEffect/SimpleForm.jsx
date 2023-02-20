import { useEffect, useState } from "react";
import "./effect.css";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const handleInputChange = (e) => {
    const valor = e.target;
    setFormState({
      ...formState,
      [valor.name]: valor.value,
    });
  };

  const { name, email } = formState;

  useEffect(() => {
    // console.log("Heyyy");
  }, []);

  useEffect(() => {
    // console.log("Cambio algo en formState");
  }, [email]);

  return (
    <div>
      <h3>Simple Form - useEffect</h3>
      <div className="form-group">
        <form>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email@gmail.com"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </form>
      </div>

      {name === "123" && <Message />}
    </div>
  );
};

export default SimpleForm;
