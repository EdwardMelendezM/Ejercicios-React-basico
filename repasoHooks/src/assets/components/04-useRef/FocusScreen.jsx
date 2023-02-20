import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <div>
      <h3>Focus Screen</h3>
      <input type="text" className="form-control" ref={inputRef} />
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
