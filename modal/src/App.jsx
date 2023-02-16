import { openModal, openModalAccount } from "./components/openModal";

function App() {
  const handleOpenModal = () => {
    openModal();
  };
  const handleOpenModal2 = () => {
    openModalAccount();
  };
  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir un modal</button>
      <button onClick={handleOpenModal2}>Abrir un modal</button>
    </div>
  );
}

export default App;
