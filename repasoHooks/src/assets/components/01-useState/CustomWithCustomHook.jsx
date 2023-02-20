import useCounter from "../../../hooks/useCounter";

const CustomWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <div>
      <h3>Custom hook</h3>
      <h3>Contador{state}</h3>

      <button className="btn" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn" onClick={() => decrement(2)}>
        -1
      </button>
      <button className="btn" onClick={() => reset()}>
        reset
      </button>
    </div>
  );
};

export default CustomWithCustomHook;
