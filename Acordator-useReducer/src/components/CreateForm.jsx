import { useState } from "react";

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
      <input type="text" onChange={handleChange} value={url} />
      <button>Create Url</button>
    </form>
  );
};

export default CreateForm;
