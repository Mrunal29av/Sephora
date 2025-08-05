import React from "react";
import './Makeup.css';
import { Link } from "react-router-dom";

const haircarecategory = [        
  {
    name: "All",
    icon: "https://cdn.dynamicyield.com/api/8767266/images/a2873de1a1e5__all-hair.png",
    path: "/hair-products"

  },
  {
    name: "Shampoo and conditioner",
    icon: "https://cdn.dynamicyield.com/api/8767266/images/2ac2841761a83__shampoo.png",
    path: "/hair-care"
  },
  {
    name: "styling",
    icon: "https://cdn.dynamicyield.com/api/8767266/images/1e5e441befc72__styling.png",
    path: "/hair-styling"
  },
  {
    name: "treatments",
    icon: "https://cdn.dynamicyield.com/api/8767266/images/1cd26d093d817__treatments.png",
    path: "/hair-treatment"
  },
  {
    name: "Hair care sets",
    icon: "https://cdn.dynamicyield.com/api/8767266/images/10ebc028b854e__hair-sets.png",
    path: "/hair-care-set"
  }
];

function Hair() {
  return (
    <div className="makeup-container">
      <div className="makeup-banner">
        <img
          src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/ZqujS3iXm-WEB-HAIR-BANNER.jpg"
          alt="Makeup Banner"
        />
      </div>

      <div className="shop-makeup-section">
        <h2 className="makeup-title">SHOP MAKEUP</h2>
        <p className="makeup-subtitle">Spoilt for choice, from global to cult brands</p>

        <div className="makeup-category-icons">
          {haircarecategory.map((btn) => (
            <div className="makeup-icon-card">
              <Link to={btn.path}>
                <img src={btn.icon} alt={btn.name} />
                              <p>{btn.name.toUpperCase()}</p>

              </Link>

            </div>
          ))}
        </div>

      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Hair;
