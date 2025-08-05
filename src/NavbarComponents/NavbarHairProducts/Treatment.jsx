import React from "react";
import "./HairProducts.css";
import AutoCarousel from "../AutoCarousel";
function Treatment() {
  const products = [

    {
      "id": 1,
      "label": "",
      "brand": "THE ORDINARY",
      "name": "Multi-Peptide Serum for Hair Density • 60ml",
      "price": 2150,
      "oldPrice": null,
      "discount": null,
      "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494474609/dKJJhAcTXdD-000000000494474609_1.jpg",
      "category": "serum"
    },
    {
      "id": 2,
      "label": "",
      "brand": "MOROCCANOIL",
      "name": "Moroccanoil Treatment • 100ml",
      "price": 3870,
      "oldPrice": 4320,
      "discount": null,
      "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/moroccanoil/7019965/0/qMOu88f9yq-1_Product_7290011521011-Moroccanoil-Moroccanoil-Treatment-100ml_2942aa3c160fe7d3241054218bcb95587a15f754_1589871917.png",
      "category": "treatment"
    },
    {
      "id": 3,
      "label": "",
      "brand": "MOROCCANOIL",
      "name": "Intense Hydrating Mask • 250ml",
      "price": 3240,
      "oldPrice": 3600,
      "discount": null,
      "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/moroccanoil/7019988/0/f7ufLI4--I-1_Product_7290011521004-Moroccanoil-Intense-Hydrating-Mask-250ml_9ac3ffa1453b6297b3ed064d59b68fc5ec47bafa_1589871916.png",
      "category": "mask"
    },
    {
      "id": 4,
      "label": "",
      "brand": "MOROCCANOIL",
      "name": "Restorative Hair Mask • 250ml",
      "price": 3870,
      "oldPrice": null,
      "discount": null,
      "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/moroccanoil/7019989/0/VL-PphGM7m-1_Product_7290011521141-Moroccanoil-Restorative-Hair-Mask-250ml_9e6e1f50555861a6f314eded1ef7519d5e16c01e_1589871923.png",
      "category": "mask"
    },
    {
      "id": 5,
      "label": "",
      "brand": "MOROCCANOIL",
      "name": "Moroccanoil Treatment Light • 100ml",
      "price": 3870,
      "oldPrice": null,
      "discount": null,
      "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/moroccanoil/7019967/0/YTjDdN-hyU-1_Product_7290011521677-Moroccanoil-Moroccanoil-Treatment-Light-100ml_b84ab933c05b7f527654ec53d55ec7700c24a508_1589871936.png",
      "category": "treatment"
    },
    {
      "id": 6,
      "label": "",
      "brand": "SEPHORA COLLECTION",
      "name": "Multi-Use Nourishing Oil • 50ml",
      "price": 1200,
      "oldPrice": null,
      "discount": null,
      "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494434276/c9fM6o0Ppy-000000000494434276_1.jpg",
      "category": "oil"
    },
    {
      "id": 7,
      "label": "",
      "brand": "OLAPLEX",
      "name": "No. 3 Hair Perfector",
      "price": 3000,
      "oldPrice": null,
      "discount": null,
      "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/olaplex/SKSJOH1S5KM-1/0/93xTJoxPJI-1.jpg",
      "category": "treatment"
    },
    {
      "id": 8,
      "label": "",
      "brand": "AVEDA",
      "name": "Botanical Repair Strengthening Leave-In Treatment",
      "price": 2900,
      "oldPrice": null,
      "discount": null,
      "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/aveda/00N1VQPI07M-1/0/sX4pnqPCep-1.jpg",
      "category": "treatment"
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
<AutoCarousel images={bannerImages}/>
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

    </>

  );
}

export default Treatment;
