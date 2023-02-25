import { useState } from "react";
import style from "./createForm.module.css";
const CreateForm = ({ dispatch }) => {
  const [url, setUrl] = useState("");
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ type: "ADD", data: url });
    dispatch({ type: "ADD", data: url });
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={url}
        className={style.input}
        placeholder="Type a valid URL"
      />
    </form>
  );
};

export default CreateForm;
