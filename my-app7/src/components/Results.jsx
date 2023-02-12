import { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import MarketItem from "./MarketItem";

const ResultsContainer = styled.div`
  posicion: absolute;
  width: 100%;
  background-color: white;
  border: solid 1px #222;
  border-top: solid 1px transparent;
  border-right: solid 1px transparent;
  border-bottom: solid 1px transparent;

  margin-top: -3px;
  box-sizing: border-box;
`;

const Results = ({ items, onItemSelected, query, onResultCalculated }) => {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

  useEffect(() => {
    onResultCalculated(results);
  }, [results]);

  function findMatch(items, query) {
    const res = items.filter((i) => {
      return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });
    setResults(res);
    return res;
  }
  return (
    <ResultsContainer>
      {query !== ""
        ? filteredItems.map((item) => (
            <MarketItem
              key={item.id}
              item={item}
              query={query}
              onClick={onItemSelected}
            />
          ))
        : ""}
    </ResultsContainer>
  );
};

export default Results;
