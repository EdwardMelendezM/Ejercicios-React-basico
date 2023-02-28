import { useRef, useState } from "react";
import TableBlockView from "./blockComponetns/tableBlock/TableBlockView";
import TextBlockView from "./blockComponetns/textBlock/TextBlockView";
import TodoBlockView from "./blockComponetns/todoBlock/TodoBlockView";
import Button from "./Button";

export default function BlockView() {
  const ref = useRef(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("text"); //table todo
  const [properties, setProperties] = useState(["id", "text", "completed"]);

  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      text: "Hola a todos",
      completed: false,
    },
  ]);

  function handleChange(item) {
    let { type, text, id, completed } = item;

    if (type === "text") {
      const temp = [...data];
      const editItem = temp.find((i) => i.id === id);
      if (editItem) {
        editItem.text = text;
        setData([...temp]);
      }
    }
    if (type === "todo") {
      const temp = [...data];
      const editItem = temp.find((i) => i.id === id);
      if (editItem) {
        editItem.text = text ?? editItem.text;
        editItem.completed = item.completed ?? editItem.text;
        setData(temp);
      }
    }
  }
  const handleOnCreate = (item) => {
    const newItem = {
      id: crypto.randomUUID(),
      text: "Hola nuevo",
      completed: false,
    };
    properties.forEach((prop) => {
      if (!newItem.hasOwnProperty(prop)) {
        newItem[prop] = "";
      }
    });
    const temp = [...data, newItem];
    setData([...temp]);
    setCurrentItem(newItem);
  };

  function TypesSelector() {
    return (
      <div>
        <Button>...</Button>
        <div>
          <button onClick={() => setType("text")}>Text</button>
          <button onClick={() => setType("todo")}>Todo</button>
          <button onClick={() => setType("table")}>Table</button>
        </div>
      </div>
    );
  }
  if (type === "todo") {
    return (
      <div>
        <TypesSelector />
        <TodoBlockView
          ref={ref}
          focusId={currentItem?.id}
          data={data}
          onChange={handleChange}
          onCreate={handleOnCreate}
        />
      </div>
    );
  }
  if (type === "table") {
    return (
      <div>
        <TypesSelector />
        <TableBlockView
          ref={ref}
          focusId={currentItem?.id}
          data={data}
          columns={properties}
          onChange={handleChange}
          onCreate={handleOnCreate}
        />
      </div>
    );
  }
  //Se mostrar por defecto el componente de texto
  return (
    <div>
      <TypesSelector />
      <TextBlockView
        ref={ref}
        focusId={currentItem?.id}
        data={data}
        onChange={handleChange}
        onCreate={handleOnCreate}
      />
    </div>
  );
}
