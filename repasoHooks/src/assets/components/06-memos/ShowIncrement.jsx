import { memo } from "react";

const ShowIncrement = ({ increment }) => {
  console.log("Me volvi a generar");
  return (
    <div>
      <button className="btn btn-primary" onClick={() => increment(5)}>
        Incrementar
      </button>
    </div>
  );
};

export default memo(ShowIncrement);
