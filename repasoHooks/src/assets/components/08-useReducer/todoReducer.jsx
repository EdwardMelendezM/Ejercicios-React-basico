export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove_one":
      return state.filter((el) => el.id !== action.payload);
    case "remove_all":
      return state.filter((el) => el.id !== action.payload);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
