import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGits";

export const useFetchGit = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 2000);
    });
  }, [category]);

  return state;
};
