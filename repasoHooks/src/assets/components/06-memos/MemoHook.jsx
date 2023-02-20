import { useMemo, useState } from "react";
import procesoPesado from "../../../helpers/procesoPesado";
import useCounter from "../../../hooks/useCounter";

const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const procesoPesadoMemo = useMemo(() => {
    //procesoPesado(counter);
  }, [counter]);
  return (
    <div>
      <h3>Memorize hook</h3>
      <h4>Counter:{counter}</h4>
      <p>{procesoPesadoMemo}</p>
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

export default MemoHook;
