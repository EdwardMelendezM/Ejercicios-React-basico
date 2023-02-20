import useForm from "../../../hooks/useForm";
import "./effect.css";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange, handleSubmit] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  return (
    <div>
      <h3>Simple Form - useEffect</h3>
      <div className="form-group">
        <form onSubmit={handleSubmit}>
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
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="********"
            value={password}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormWithCustomHook;
