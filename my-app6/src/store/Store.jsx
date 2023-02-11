import { useState, useEffect, createContext, useContext } from "react";
const AppContext = createContext({
  item: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (id) => {},
});
export default function Store({ children }) {
  const [items, setItems] = useState([]);

  const createItem = (item) => {
    const temp = [...items];
    temp.push(item);
    setItems(temp);
  };
  const getItem = (id) => {
    const item = items.find((item) => item.id === id);
    return item;
  };
  const updateItem = (item) => {
    const index = items.findIndex((i) => i.id === id);
    const temp = [...items];
    temp[index] = { ...item };
  };
  return (
    <AppContext.Provider value={{ items, createItem, getItem, updateItem }}>
      {children}
    </AppContext.Provider>
  );
}

export function usoAppContext() {
  return useContext(AppContext);
}
