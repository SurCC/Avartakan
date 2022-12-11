import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/Pages/MainPage/MainPage";
import Catalog from "./Components/Pages/Catalog/Catalog";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bodyOfApp">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="Catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
