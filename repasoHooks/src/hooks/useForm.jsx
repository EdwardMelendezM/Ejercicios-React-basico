import { useState, useEffect } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      values,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log("Email cambio");
  }, [values]);

  return [values, handleInputChange, handleSubmit];
};

export default useForm;
