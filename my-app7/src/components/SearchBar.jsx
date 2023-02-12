import { useState } from "react";
import styled from "styled-components";
import Results from "./Results";
const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  margin: 0 auto;
`;
const StyledInput = styled.input`
    width: 100%;
    padding: 10px;  
    border-radius:5px
    box-sizing: border-box;
  
    &:focus {
      border-right: solid 1px transparent;
      border-bottom: solid 1px transparent;
      border:0;
    }
  `;

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
    <SearchBarContainer>
      {results && <div>{results.length} results</div>}
      <StyledInput
        type="text"
        onChange={handleChange}
        value={query}
      ></StyledInput>
      <Results
        items={items}
        onItemSelected={handleItemtSelected}
        query={query}
        onResultCalculated={handleResutls}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
