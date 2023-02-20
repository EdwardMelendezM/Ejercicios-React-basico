import { useState } from "react";

const useCounter = (initialcounter = 10) => {
  const [counter, setCounter] = useState(initialcounter);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return { counter, increment, decrement };
};

export default useCounter;
