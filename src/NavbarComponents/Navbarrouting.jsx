import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bathandbody from "./Bathandbody";
import Brands from "./Brands";
import Clean from "./Clean";
import Fragrance from "./Fragrance";
import Gift from "./Gift";
import Makeup from "./Makeup";
import Hair from "./Hair";
import New from "./New";
import Sale from "./Sale";
import Skincare from "./Skincare";
import Toolsandbrushes from "./Toolsandbrushes";
import './Contentwrapper.css';
import All from "./NavbarMakeup/All";
import Eyes from "./NavbarMakeup/Eyes";
import Face from "./NavbarMakeup/Face";
import Lips from "./NavbarMakeup/Lips";
import Makeupremover from "./NavbarMakeup/Makeupremover";
import Nails from "./NavbarMakeup/Nails";
// Hair
import HairCare from "./NavbarHairProducts/HairCare";
import HairProducts from "./NavbarHairProducts/HairProducts";
import Styling from "./NavbarHairProducts/Styling";
import Treatment from "./NavbarHairProducts/Treatment";
import Haircareset from "./NavbarHairProducts/Haircareset";

function Navbarrouting() {
    return (

        <div className="content-wrapper">

            <Routes>

                <Route path="/bathandbody" element={<Bathandbody />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/clean" element={<Clean />} />
                <Route path="/fragrance" element={<Fragrance />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/hair" element={<Hair />} />
                <Route path="/makeup" element={<Makeup />} />
                <Route path="/new" element={<New />} />
                <Route path="/sale" element={<Sale />} />
                <Route path="/skincare" element={<Skincare />} />
                <Route path="/toolsandbrushes" element={<Toolsandbrushes />} />

                {/* Makeup */}
                <Route path="/all" element={<All />} />
                <Route path="/eyes" element={<Eyes />} />
                <Route path="/face" element={<Face />} />
                <Route path="/lips" element={<Lips />} />
                <Route path="/makeupremover" element={<Makeupremover />} />
                <Route path="/nails" element={<Nails />} />


                {/* Hair */}

                 <Route path="/hair-products" element={<HairProducts/>} />
                <Route path="/hair-care" element={<HairCare/>} />
                <Route path="/hair-styling" element={<Styling/>} />
                <Route path="/hair-treatment" element={<Treatment/>} />
                <Route path="/hair-care-set" element={<Haircareset />} />


            </Routes>

        </div>



    );
}

export default Navbarrouting;
