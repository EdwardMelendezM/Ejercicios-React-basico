import { useState } from "react";
import "./counter.css";
const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });
  const { counter1, counter2 } = state;
  return (
    <div>
      <h2>Counter</h2>
      <h3>Counter{counter1}</h3>
      <h3>Counter{counter2}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          setState({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </div>
  );
};

export default CounterApp;
