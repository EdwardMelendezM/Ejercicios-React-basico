import { useState } from "react";
import useCounter from "../../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h3>Memorize</h3>
      <h4>
        Counter:
        <Small value={counter} />
      </h4>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
