import { useState } from "react";
import Results from "./Results";

const SearchBar = ({ items, onItemSelected }) => {
  const [query, setQuery] = useState("");
  const [results, setResult] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  function handleResutls(items) {
    setResult(items);
  }
  const handleItemtSelected = () => {};
  return (
    <div>
      {results && <div>{results.length} results</div>}
      <input type="text" onChange={handleChange} value={query} />
      <Results
        items={items}
        onItemSelected={handleItemtSelected}
        query={query}
        onResultCalculated={handleResutls}
      />
    </div>
  );
};

export default SearchBar;
