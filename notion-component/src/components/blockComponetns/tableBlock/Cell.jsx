import { useEffect, useRef, useState } from "react";
import Input from "../../Input";

export default function Cell({ text, onChange, canBeEdited }) {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(text);
  const ref = useRef(null);

  useEffect(() => {
    setValue(text);
  }, [text]);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [editable]);

  const handleOnDobleClick = () => {
    setEditable(true);
  };
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleOnBlur = () => {
    onChange(value);
    setEditable(false);
  };
  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  return editable && canBeEdited ? (
    <td>
      <Input
        ref={ref}
        onChange={handleOnChange}
        value={value}
        onBlur={handleOnBlur}
        onKeyDown={handleOnKeyDown}
      ></Input>
    </td>
  ) : (
    <td onDoubleClick={handleOnDobleClick} key={crypto.randomUUID()}>
      {value}
    </td>
  );
}
