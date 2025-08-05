import React from "react";
import "./HairProducts.css"; 
import AutoCarousel from "../AutoCarousel";

function Styling() {
    const products = [

        {
            "id": 1,
            "label": "SEPHORA EXCLUSIVE",
            "brand": "RARE BEAUTY",
            "name": "Find Comfort Body & Hair Fragrance Mist • 100ml",
            "price": 3400,
            "oldPrice": null,
            "discount": null,
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/NLcKBhhWN-Find-Comfort-Body-and-Hair-Fragrance-Mist-100ML.png",
            "category": "mist"
        },
        {
            "id": 2,
            "label": "SEPHORA EXCLUSIVE",
            "brand": "HANZ DE FUKO",
            "name": "Claymation • 56g",
            "price": 2850,
            "oldPrice": null,
            "discount": null,
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494273091/3k-7IUGcLj-000000000494273091_1.jpg",
            "category": "clay"
        },
        {
            "id": 3,
            "label": "",
            "brand": "OLAPLEX",
            "name": "No.7 Bonding Oil • 30ml",
            "price": 3200,
            "oldPrice": null,
            "discount": null,
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/olaplex/7019867/0/yMW4BTSMb_-1_Product_896364002671-Olaplex-No-7-Bonding-Oil-30-ml_d4b7badff7d2eea21bde82def55e8597c038526f_1618414311.png",
            "category": "oil"
        },
        {
            "id": 4,
            "label": "",
            "brand": "MOROCCANOIL",
            "name": "Curl Control Mousse • 150ml",
            "price": 2070,
            "oldPrice": 2340,
            "discount": null,
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/moroccanoil/7019995/0/00-yMJD4yu-1_Product_7290011521448-Moroccanoil-Curl-Control-Mousse-150ml_d0a932cc12485aaf0336cfe93ca4e05755f94c73_1637075116.png",
            "category": "mousse"
        },

        {
            "id": 5,
            "label": "",
            "brand": "HANZ DE FUKO",
            "name": "Sponge Wax • 56g",
            "price": 2850,
            "oldPrice": null,
            "discount": null,
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/moroccanoil/7019985/0/VhX5uQbcsy-1_Product_7290011521042-Moroccanoil-Intense-Curl-Cream-300ml_4d137268a7233befad6f16f31a82004504b51470_1589871920.png",
            "category": "wax"
        },
        {
            "id": 6,
            "label": "",
            "brand": "MOROCCANOIL",
            "name": "Hydrating Styling Cream • 300ml",
            "price": 2800,
            "oldPrice": null,
            "discount": null,
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/moroccanoil/7019984/0/2BL_Sl85Xq-1_Product_7290011521028-Moroccanoil-Hydrating-Styling-Cream-300ml_d9eca636845594ba6cb5ef3cd1ac7749a084ef62_1589871918.png",
            "category": "styling cream"
        },
        {
            "id": 7,
            "label": "",
            "brand": "MOROCCANOIL",
            "name": "Hydrating Styling Cream • 75ml",
            "price": 1250,
            "oldPrice": null,
            "discount": null,
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/moroccanoil/7019992/0/JJIEospSFh-1_Product_7290014827998-Moroccanoil-Smoothing-Lotion-For-Hair-300ml_ca9bf7af9f092bb5f15f515ec995b1af76dcb2da_1589871954.png",
            "category": "styling cream"
        },
        {
            "id": 8,
            "label": "",
            "brand": "OLAPLEX",
            "name": "No.6 Bond Smoother",
            "price": 3000,
            "oldPrice": null,
            "discount": null,
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/olaplex/7015946/0/MBn4hTTFOU-1_Product_896364002602-Olaplex-No-6-Bond-Smoother-100ml_d0804a192d00c9a9d311007efb2c5f8c2599d948_1618414306.png",
            "category": "smoother"
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
          alt="Haircare"
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

export default Styling;
