import React, { useState } from "react";

import MultipleHooks from "../03-Examples/MultipleHooks";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h3>Refff caso real</h3>
      {show && <MultipleHooks />}

      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show/hide
      </button>
    </div>
  );
};

export default RealExampleRef;
