import { useEffect, useState } from "react";

export default function Cronometro() {
  const [contador, setContador] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let intervalo;
    if (active) {
      intervalo = setInterval(() => {
        setContador((valor) => valor - 1);
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [active]);

  useEffect(() => {
    if (contador === 0) {
      setActive(false);
      setContador(0);
    }
  }, [contador]);

  const handleClickMas = () => {
    setContador(contador + 5);
  };
  const handleClickMenos = () => {
    if (contador !== 0) {
      setContador(contador - 5);
    }
  };
  const handleClickStart = () => {
    setActive(true);
  };
  const handleClickRefresh = () => {
    setActive(false);
    setContador(0);
  };

  return (
    <div className="container">
      <div className="containerView">
        <div className="viewContador">{contador}</div>
        <button onClick={handleClickMenos}>-5</button>
        <button onClick={handleClickMas}>+5</button>
      </div>
      <button onClick={handleClickStart}>Start</button>
      <button onClick={handleClickRefresh}>Refresh</button>
    </div>
  );
}
