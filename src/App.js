import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage";
import "./App.css";

function App() {
  return (
    <div className="bodyOfApp">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
