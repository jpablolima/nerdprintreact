import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/navbar";
import Serviços from "./components/Serviços";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Banner />
      <Serviços />
      <Depoimentos />
      <Contato />
    </div>
  );
}

export default App;
