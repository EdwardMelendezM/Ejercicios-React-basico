import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Index from "./pages/Index";
import View from "./pages/View";
import Store from "./store/Store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
