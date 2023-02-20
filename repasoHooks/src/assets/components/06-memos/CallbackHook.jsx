import { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(
    (num = 1) => {
      setCounter((C) => C + num);
    },
    [setCounter]
  );

  useEffect(() => {
    ///?
  }, [increment]);

  console.log("Yo soy el main");
  return (
    <div>
      <h3>Callback hook</h3>
      <h4>Counter{counter}</h4>
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
