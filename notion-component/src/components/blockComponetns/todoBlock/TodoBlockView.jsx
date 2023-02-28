import { forwardRef, useEffect } from "react";
import TodoBlock from "./TodoBlock";

function TodoBlockView({ data, onChange, onCreate, focusId }, ref) {
  useEffect(() => {
    if (focusId && ref.current) {
      ref.current.focus();
    }
  }, [focusId]);

  const handleOnChange = (item, e) => {
    if (e.target.name === "checkbox") {
      onChange({ type: "todo", id: item.id, completed: e.target.checked });
    } else {
      onChange({ type: "todo", id: item.id, text: e.target.value });
    }
  };
  const handleOnKeyDown = (item, e) => {
    if (e.key === "Enter") {
      onCreate();
    }
  };

  return data.map((item) => (
    <TodoBlock
      ref={ref}
      key={item.id}
      item={item}
      focus={focusId === item.id}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
    />
  ));
}

export default forwardRef(TodoBlockView);
