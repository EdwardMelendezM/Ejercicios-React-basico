import { useState } from "react";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 1px #ccc;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

const peaple = [
  {
    id: "peaple-01",
    title: "Juan peres",
  },
  {
    id: "peaple-02",
    title: "Marcos Rivas",
  },
  {
    id: "peaple-03",
    title: "Sergio Martines",
  },
  {
    id: "peaple-04",
    title: "Laura Jimenes",
  },
  {
    id: "peaple-05",
    title: "Horario Martines",
  },
];
const calendar = [
  {
    id: "calendar-01",
    title: "Sesion de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revision de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal con amigos",
  },
  {
    id: "calendar-05",
    title: "Revision de pendientes con cliente",
  },
];

const emails = [
  {
    id: "email-01",
    title: "Requisitos de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos de cambio",
  },
  {
    id: "email-03",
    title: "Estatus funcional",
  },
  {
    id: "email-04",
    title: "Proximo cambio",
  },
  {
    id: "email-05",
    title: "Participacion en la encuesta",
  },
];
function App() {
  const [data, setData] = useState([...peaple, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("  all");

  const handleClick = (e) => {
    const op = e.target.name;
    switch (op) {
      case "all":
        setData([...peaple, ...calendar, ...emails]);
        setCurrentOption("all");
        break;
      case "peaple":
        setData([...peaple]);
        setCurrentOption("peaple");
        break;
      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Button onClick={handleClick} name="all">
        All
      </Button>
      <Button onClick={handleClick} name="peaple">
        Peaple
      </Button>
      <Button onClick={handleClick} name="calendar">
        Calendar
      </Button>
      <Button onClick={handleClick} name="emails">
        Emails
      </Button>
      <SearchBar items={data} onItemSelected={() => {}} />
    </div>
  );
}

export default App;
