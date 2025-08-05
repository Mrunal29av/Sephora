import react from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import HeroBanner from "./HeroBanner";
import ShopCategoriesSection from "./ShopCategoriesSection";
import Header from "./Header";
import MidBanner from "./MidBanner";
import ShopByBrand from "./ShopByBrand";
import "./HomePage.css";
import Brandofmonth from "./Brandofmonth";
import Footer from "./Footer";
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage-wrapper">
            
            <br></br>
            <HeroBanner />
            <ShopCategoriesSection />
            <MidBanner/>
            <br></br>
            <ShopByBrand/>
            <br></br>
            <Brandofmonth/>

        </div>
    )
}

export default HomePage;