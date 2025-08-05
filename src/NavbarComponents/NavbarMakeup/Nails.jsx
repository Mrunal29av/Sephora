import React, { useEffect, useState } from "react";
import axios from "axios";
import "./All.css";

function Nails() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:5009/nails')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {

        console.error("Error fetching data:", error)
      })

  }, []);


  return (
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
  );
}

export default Nails;
