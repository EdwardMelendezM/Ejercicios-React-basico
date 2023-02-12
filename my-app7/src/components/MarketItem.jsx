import { useMemo } from "react";
import styled from "styled-components";
const StyledMarket = styled.span`
  background-color: yellow;
  font-weight: bold;
  border-radius: 2px;
`;
const StyledItem = styled.a`
  color: black;
  display: block;
  padding: 10px;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: #4c91ba;
    color: white;
  }
  &:hover span {
    color: black;
  }
`;

const MarketItem = ({ item, query, onClick }) => {
  const { left, center, right } = useMemo(
    () => getPosicion(item, query),
    [item, query]
  );
  function getPosicion(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);
    const right = item.title.slice(index + query.length);
    const center = item.title.slice(index, index + query.length);
    return { left, right, center };
  }
  return (
    <StyledItem>
      {left}
      <StyledMarket>{center}</StyledMarket>
      {right}
    </StyledItem>
  );
};

export default MarketItem;
