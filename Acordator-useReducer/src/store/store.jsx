import { useReducer } from "react";
import { add, load, addView } from "./action";

export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return add(state, action);
    case "LOAD":
      return load(state, action);
    case "ADD_VIEW":
      return addView(state, action);
    default:
      return;
  }
}

export default function useReducerApp() {
  return useReducer(reducer, { items: [] });
}
