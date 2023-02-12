import { useMemo } from "react";

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
    <button>
      {left}
      <span style={{ fontWeight: "bolder", backgroundColor: "yellow" }}>
        {center}
      </span>
      {right}
    </button>
  );
};

export default MarketItem;
