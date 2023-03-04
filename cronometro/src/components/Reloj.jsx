import { useState } from "react";

export default function Reloj() {
  const [reloj, setReloj] = useState(new Date().toLocaleTimeString());
  const [turno, setTurno] = useState("am");

  setTimeout(() => {
    const temp = new Date().toLocaleTimeString().split(":");
    if (temp[0] >= 13) {
      temp[0] -= 12;
      if (temp[0] < 10) {
        temp[0] = `0${temp[0]}`;
      } else {
        temp[0] = `${temp[0]}`;
      }

      setTurno("pm");
    } else {
      setTurno("am");
    }
    setReloj(temp.join(":"));
  }, 1000);

  return (
    <div>
      <h3>Reloj: {`${reloj} ${turno}`}</h3>
    </div>
  );
}
