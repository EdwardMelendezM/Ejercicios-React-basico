import React, { useState, useEffect } from "react";

const useFetch = (url = "") => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setstate({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
