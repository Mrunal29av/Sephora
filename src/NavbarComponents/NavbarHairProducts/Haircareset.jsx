import React from "react";
import "./HairProducts.css";
import AutoCarousel from "../AutoCarousel";

function Haircareset() {
  const products = [
    {
      "id": 1,
      "label": "SEPHORA EXCLUSIVE",
      "brand": "SEPHORA COLLECTION",
      "name": "Moving Lights Scalp O’Clock Scalp Care Set (Holiday Limited Edition)",
      "price": 4200,
      "oldPrice": null,
      "discount": null,
      "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494434576/uTFkAPUNvA-000000000494434576_1.jpg",
      "category": "hair care set"
    }

  ];


  const bannerImages = [
    "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:1280/theme-image-1754053493824.jpeg",
    "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:1280/theme-image-1754053446053.jpeg",
    "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:1280/theme-image-1754053467666.jpeg",
    "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:1280/theme-image-1754053527521.jpeg"
  ];


  return (
    <>

      <div className="makeup-banner">
        <img
          src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/Lz9Uotdeb-skincare.png"
          alt="Skincare"
        />
        <div className="second-banner">
          <AutoCarousel images={bannerImages} />
        </div>

      </div>


      <div className="makeup-product-grid">
        {products.map((product) => (
          <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />

            <span className="product-label">{product.label}</span>

            <h5 className="brand-name">{product.brand}</h5>
            <p className="product-name">{product.name}</p>

            <div className="product-price">
              ₹{product.price.toLocaleString()}
              {product.oldPrice && (
                <>
                  <span className="old-price"> ₹{product.oldPrice.toLocaleString()}</span>
                  <span className="discount"> ({product.discount})</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

    </>);
}

export default Haircareset;
