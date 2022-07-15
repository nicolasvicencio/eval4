import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import CarrouselDom from "./components/Carousel";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import List from "./components/List";
import Authors from "./components/Authors";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Header />
      <div className="div container">
        <CarrouselDom />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="buscar" element={<Authors />} />
        <Route path="listado" element={<List />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
