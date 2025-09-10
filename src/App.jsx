import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import LandingPage from "./components/LandingPage";
import Canecas from "./pages/Canecas";
import Impressao from "./pages/Impressao";
import Camisetas from "./pages/camisetas";
import Adesivos from "./pages/Adesivos";
import Fotos from "./pages/Fotos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Impressao" element={<Impressao />} />
        <Route path="/Canecas" element={<Canecas />} />
        <Route path="/impressao" element={<Impressao />} />
        <Route path="/camisetas" element={<Camisetas />} />
        <Route path="/adesivos" element={<Adesivos />} />
        <Route path="/fotos" element={<Fotos />} />
      </Routes>
    </Router>
  );
}

export default App;
