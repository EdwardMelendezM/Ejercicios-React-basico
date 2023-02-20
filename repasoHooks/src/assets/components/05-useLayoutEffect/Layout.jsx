import useCounter from "../../../hooks/useCounter";
import useFetch from "../../../hooks/useFetch";
import "./layout.css";
const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  return (
    <div>
      <h1>Layout effects</h1>

      <blockquote className="blockquote text-end">
        <p className="mb-3">{quote}</p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente
      </button>
    </div>
  );
};

export default Layout;
