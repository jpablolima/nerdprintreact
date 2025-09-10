import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import LandingPage from "./components/LandingPage";
import Impressao from "./pages/Impressao";
import Camisetas from "./pages/camisetas";
import Adesivos from "./pages/Adesivos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/impressao" element={<Impressao />} />
        <Route path="/camisetas" element={<Camisetas />} />
        <Route path="/adesivos" element={<Adesivos />} />
      </Routes>
    </Router>
  );
}

export default App;
