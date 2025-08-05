// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./HomeComponents/TopBar";
import Header from "./HomeComponents/Header";
import Navbar from "./HomeComponents/Navbar";
import Footer from "./HomeComponents/Footer";

import Homerouting from "./HomeComponents/Homerouting";
import Navbarrouting from "./NavbarComponents/Navbarrouting";
import './App.css';
function App() {
  return (
    <div className="content-wrapper">
      
    <Router>
      <TopBar />
      <Header />
      <Navbar />
      <Homerouting />
      <Navbarrouting />
      <br></br>
      <br></br>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
