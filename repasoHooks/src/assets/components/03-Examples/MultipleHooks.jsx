import useCounter from "../../../hooks/useCounter";
import useFetch from "../../../hooks/useFetch";

const MultipleHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, loading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];

  return (
    <div>
      <h1>Breaking bad codes</h1>

      {loading ? (
        <div className="alert alert-info text-center">Loading</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Siguiente
      </button>
    </div>
  );
};

export default MultipleHooks;
