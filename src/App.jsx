import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Serviços from "./components/Serviços";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";
import FeaturesNerdPrint from "./components/FeaturesNerdPrint";
import Impressao from "./pages/Impressao";
import Comments from "./components/Comments";

function LandingPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Banner />
      <Serviços />
      <FeaturesNerdPrint />
      <Comments />
      <Depoimentos />
      <Contato />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Impressao" element={<Impressao />} />
      </Routes>
    </Router>
  );
}

export default App;
