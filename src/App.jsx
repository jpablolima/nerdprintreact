import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Impressao from "./pages/Impressao";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Impressao" element={<Impressao />} />
      </Routes>
    </Router>
  );
}

export default App;
