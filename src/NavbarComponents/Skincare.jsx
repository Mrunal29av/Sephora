import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Toolsandbrushes.css";
import AutoCarousal from "./AutoCarousel";

const Skincare = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5009/skincare")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const filteredProducts = products.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.title?.toLowerCase().includes(term) ||
      item.brand?.toLowerCase().includes(term)
    );
  });

  const bannerImages = [
    "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:1280/theme-image-1753773822358.jpeg",
    "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:1280/theme-image-1753857099200.jpeg",
    "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:1280/theme-image-1753773800728.jpeg",
    "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:1280/theme-image-1753773782235.jpeg"
  ];

  return (
    <>
      <div className="makeup-banner">
        <img
          src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/Lz9Uotdeb-skincare.png"
          alt="Skincare"
        />
        <div className="second-banner">
          <AutoCarousal images={bannerImages} />
        </div>
      </div>

      <div className="makeup-searchbar">
        <input
          type="text"
          placeholder="Search skincare products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="makeup-product-grid">
        {filteredProducts.map((item, idx) => (
          <div className="product-card" key={idx}>
            <img src={item.image} className="product-image" alt={item.title} />
            {item.label && <span className="product-label">{item.label}</span>}
            <h5 className="brand-name">{item.brand}</h5>
            <p className="product-name">{item.title}</p>
            <div className="product-price">
              ₹{item.price.toLocaleString()}
              {item.originalPrice && (
                <>
                  <span className="old-price"> ₹{item.originalPrice.toLocaleString()}</span>
                  {item.discount && <span className="discount">{item.discount}</span>}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skincare;
