import React from "react";
import "./HairProducts.css";
import AutoCarousel from "../AutoCarousel";

function HairCare() {
    const products = [

        {
            "id": 1,
            "label": "",
            "brand": "OUAI",
            "name": "Thick Hair Shampoo",
            "price": 3000,
            "oldPrice": 3400,
            "discount": "12%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000491338753/NZpu9p4m1-000000000491338753_1.png",
            "category": "shampoo"
        },
        {
            "id": 2,
            "label": "",
            "brand": "Briogeo",
            "name": "Don't Despair, Repair! Super Moisture Shampoo",
            "price": 2800,
            "oldPrice": 3200,
            "discount": "13%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000491338754/tT8ylF0rt-000000000491338754_1.png",
            "category": "shampoo"
        },
        {
            "id": 3,
            "label": "",
            "brand": "MOROCCANOIL",
            "name": "Moisture Repair Conditioner",
            "price": 2600,
            "oldPrice": 2900,
            "discount": "10%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494474710/pKlePduVAwy-000000000494474710_1.jpg",
            "category": "conditioner"
        },
        {
            "id": 4,
            "label": "",
            "brand": "OLAPLEX",
            "name": "No. 5 Bond Maintenance Conditioner",
            "price": 3200,
            "oldPrice": 3600,
            "discount": "11%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/olaplex/7015943/0/PO0TKqXdlI-1_Product_896364002435-Olaplex-No-5-Bond-Maintenance-Conditioner-250ml_aa6fbbb326587c5bcbf38de56f37390db2f661e8_1618414303.png",
            "category": "conditioner"
        },
        {
            "id": 5,
            "label": "",
            "brand": "LIVING PROOF",
            "name": "Perfect Hair Day Shampoo",
            "price": 2500,
            "oldPrice": 2700,
            "discount": "7%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000493717235/Rh7sRriOcp-000000000493717235_1.jpg",
            "category": "shampoo"
        },
        {
            "id": 6,
            "label": "",
            "brand": "KERASTASE",
            "name": "Nutritive Bain Satin Shampoo",
            "price": 3300,
            "oldPrice": 3700,
            "discount": "11%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494273098/zx5erTtqDj-000000000494273098_1.jpg",
            "category": "shampoo"
        },
        {
            "id": 7,
            "label": "",
            "brand": "AVEDA",
            "name": "Damage Remedy Restructuring Conditioner",
            "price": 3100,
            "oldPrice": 3400,
            "discount": "9%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/aveda/Y2MIT82KIVN-1/0/EPOTdHdBMN-1.jpg",
            "category": "conditioner"
        },
        {
            "id": 8,
            "label": "",
            "brand": "SHEAMOISTURE",
            "name": "Curl & Shine Shampoo",
            "price": 2200,
            "oldPrice": 2500,
            "discount": "12%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494274039/PDNLr4BEff-000000000494274039_1.jpg",
            "category": "shampoo"
        },
        {
            "id": 9,
            "label": "",
            "brand": "VERB",
            "name": "Hydrating Conditioner",
            "price": 2400,
            "oldPrice": 2700,
            "discount": "11%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494513591/fmxBRfntw9c-000000000494513591_1.jpg",
            "category": "conditioner"
        },
        {
            "id": 10,
            "label": "",
            "brand": "COLOR WOW",
            "name": "Color Security Shampoo",
            "price": 2900,
            "oldPrice": 3200,
            "discount": "9%",
            "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000491338758/6k90Au0W5W-000000000491338758_1.png",
            "category": "shampoo"
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
          src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/ZqujS3iXm-WEB-HAIR-BANNER.jpg"
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
        </>
    );
}

export default HairCare;
