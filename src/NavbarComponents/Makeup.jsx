import React from "react";
import './Makeup.css';
import { Link } from "react-router-dom";

const makeupCategories = [
  {
    name: "All",
    icon: "https://cdn.dynamicyield.com/api/8767263/images/159a90c916224__19be366e476a3__Subcategory_Icons-12.png",
    path: "/all"
  },
  {
    name: "Face",
    icon: "https://cdn.dynamicyield.com/api/8767263/images/1b93ee4b4f5b7__281ef3a58d272__Sephora_Subcategory_Icons_face.png",
    path: "/face"
  },
  {
    name: "Eyes",
    icon: "https://cdn.dynamicyield.com/api/8767263/images/35d42a18892bb__296b26867d2b0__Sephora_Subcategory_Icons_eyes.png",
    path: "/eyes"

  },
  {
    name: "Lips",
    icon: "https://cdn.dynamicyield.com/api/8767263/images/fee68d867e17__2e685e7c07046__Sephora_Subcategory_Icons_lips.png",
    path: "/lips"
  },
  {
    name: "Nails",
    icon: "https://cdn.dynamicyield.com/api/8767263/images/73f1287ee123__9b5d69e1dc09__Sephora_Subcategory_Icons_nails.png",
    path: "/nails"
  },
  {
    name: "Makeup Remover",
    icon: "https://cdn.dynamicyield.com/api/8767263/images/2d7e7c37e8719__338df60b17d97__Sephora_Subcategory_Icons_remover.png"
  }
];

function MakeupPage() {
  return (
    <div className="makeup-container">
      <div className="makeup-banner">
        <img
          src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/daTlqWN5n-WEB-MAKEUP-BANNER.jpg"
          alt="Makeup Banner"
        />
      </div>

      <div className="shop-makeup-section">
        <h2 className="makeup-title">SHOP MAKEUP</h2>
        <p className="makeup-subtitle">Spoilt for choice, from global to cult brands</p>

        <div className="makeup-category-icons">
          {makeupCategories.map((btn) => (
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

export default MakeupPage;
