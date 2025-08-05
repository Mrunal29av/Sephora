import React from "react";
import "./All.css";


function Face() {
    const products = [
        {
            id: 1,
            label: "NEW",
            brand: "RARE BEAUTY",
            name: "Soft Pinch Liquid Blush",
            price: 3200,
            oldPrice: null,
            discount: null,
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494273784/mMfhGFeri-000000000494273784_1.png"
        },
        {
            id: 2,
            label: "NEW | SEPHORA EXCLUSIVE",
            brand: "RARE BEAUTY",
            name: "Soft Pinch Matte Bouncy Blush • 6.4g",
            price: 3400,
            oldPrice: 4550,
            discount: "30%",
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494587031/YgzSJ9Xab7-000000000494587031_1.jpg"
        },
        {
            id: 3,
            label: "SEPHORA EXCLUSIVE",
            brand: "SEPHORA COLLECTION",
            name: "Best Skin Ever High Coverage Concealer",
            price: 1650,
            oldPrice: null,
            discount: null,
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494277050/8JrFhLTcPt-000000000494277050_1.png"
        },
        {
            id: 4,
            label: "NEW | SEPHORA EXCLUSIVE",
            brand: "RARE BEAUTY",
            name: "Warm Wishes Effortless Bronzer Stick",
            price: 3300,
            oldPrice: null,
            discount: null,
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494273787/13KFl6nvE_-000000000494273787_1.png"
        },
        {
            id: 5,
            label: "",
            brand: "MAKE UP FOR EVER",
            name: "HD Skin Face Essentials Palette • 25.8g",
            price: 7500,
            oldPrice: 8000,
            discount: "13%",
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494434326/HnFbnH85zWE-000000000494434326_1.jpg"
        },
        {
            id: 6,
            label: "NEW",
            brand: "HUDA BEAUTY",
            name: "Easy Blur Silicone-Free Smoothing Primer • 30ml",
            price: 2100,
            oldPrice: null,
            discount: null,
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494434170/fpuP6IW0g-000000000494434170_1.jpg"
        },
        {
            id: 7,
            label: "SEPHORA EXCLUSIVE",
            brand: "RARE BEAUTY",
            name: "Soft Pinch Liquid Contour • 15ml",
            price: 3155,
            oldPrice: 4550,
            discount: "30%",
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494512875/MYQqdIJ_2uA-000000000494512875_1.jpg"
        },
        {
            id: 8,
            label:"",
            brand: "MAC COSMETICS",
            name: "Fix + • 100ml",
            price: 1450,
            oldPrice: null,
            discount: null,
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494411779/URE6hQ6gVpY-000000000494411779_1.jpg"
        },
        {
            id: 9,
            label: "NEW | SEPHORA EXCLUSIVE",
            brand: "BENEFITS COSMETICS",
            name: "The POREfessional Foundation Smoothing & Blurring Foundation with Niacinamide • 30ml",
            price: 4650,
            oldPrice: null,
            discount: null,
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494586640/xCdSD0A1UF8-000000000494586640_1.jpg"
        },
        {
            id: 10,
            label: "",
            brand: "RARE BEAUTY",
            name: "Lip Soufflé Matte Cream Lipstick",
            price: 2600,
            oldPrice: 3000,
            discount: "13%",
            image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494512102/adT73kS3bf-000000000494512102_1.jpg"
        }
    ];

    return (
      <>
      
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

export default Face;
