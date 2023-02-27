import { useRef } from "react";
import TextBlockView from "./blockComponetns/textBlock/TextBlockView";

export default function BlockView() {
  const ref = useRef(null);
  //Se mostrar por defecto el componente de texto
  return (
    <div>
      <TextBlockView />
    </div>
  );
}
