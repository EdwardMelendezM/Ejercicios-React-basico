import { forwardRef } from "react";
import Input from "../../Input";

function TextBlock({ item, onChange, onKeyDown, focus }, ref) {
  const handleOnKeyDown = (e) => {
    onKeyDown(item, e);
  };
  const handleOnChange = (e) => {
    onChange(item, e);
  };
  return (
    <Input
      ref={focus ? ref : null}
      value={item.text}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
    ></Input>
  );
}
export default forwardRef(TextBlock);
