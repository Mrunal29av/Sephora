import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BeautyUnder999 from "../CategoryButtons/BeautyUnder999";
import BestSellers from "../CategoryButtons/BestSellers";
import EverydayEssentials from "../CategoryButtons/EverydayEssentials";
import HotAndHappening from "../CategoryButtons/HotAndHappening";
import Newarrival from "../CategoryButtons/Newarrival";
import BestOfMakeup from "../CategoryButtons/BestOfMakeup";


function Homerouting() {
  return (
    <div className="homepage-wrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beautyunder99" element={<BeautyUnder999 />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/everydayessential" element={<EverydayEssentials />} />
        <Route path="/hothappening" element={<HotAndHappening />} />
        <Route path="/newarrival" element={<Newarrival />} />
        <Route path="/bestofmakeup" element={<BestOfMakeup />} />
      </Routes>

    </div>


  );
}

export default Homerouting;
