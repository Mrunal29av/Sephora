import React, { useEffect, useState } from "react";
import "./All.css";
import axios from "axios";

function Eyes() {
  const [products, setProducts] = useState([]);
  const[searchTerm,setSearchTerm]= useState("");

  useEffect(() => {

    axios.get('http://localhost:5009/eyes') 
    .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


// const filteredProducts = products.filter((item) => {
//     const term = searchTerm.toLowerCase();
//     return (
//       item.title?.toLowerCase().includes(term) ||
//       item.brand?.toLowerCase().includes(term)
//     );
//   });



  return (
    <div className="makeup-product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
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

export default Eyes;
