import { forwardRef } from "react";
import Input from "../../Input";

function TodoBlock({ focus, item, onChange, onKeyDown }, ref) {
  function handleOnChange(e) {
    onChange(item, e);
  }

  function handleOnKeyDown(e) {
    onKeyDown(item, e);
  }
  return (
    <div>
      <input
        name="checkbox"
        type={"checkbox"}
        onChange={handleOnChange}
        checked={item.completed}
      />
      <Input
        ref={focus ? ref : null}
        value={item.text}
        onKeyDown={handleOnKeyDown}
        onChange={handleOnChange}
      ></Input>
    </div>
  );
}
export default forwardRef(TodoBlock);
