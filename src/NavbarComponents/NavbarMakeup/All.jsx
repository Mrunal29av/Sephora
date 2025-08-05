import React from "react";
import "./All.css"; 

function All() {
  const products = [
    {
      id: 1,
      label: "NEW",
      brand: "HUDA BEAUTY",
      name: "Lip Contour Lip Stain - 1g",
      price: 2100,
      oldPrice: null,
      discount: null,
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494573440/aTxqP9aX_-000000000494573440_1.jpg"
    },
    {
      id: 2,
      label: "",
      brand: "MAC COSMETICS",
      name: "Maximal Matte Mini Mac Lipstick - 1.8g",
      price: 3155,
      oldPrice: 4550,
      discount: "30%",
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494411474/VI1LhKymk_IH-000000000494411474_1.jpg"
    },
    {
      id: 3,
      label: "SEPHORA EXCLUSIVE",
      brand: "SEPHORA COLLECTION",
      name: "New Cream Lip Stain - 5ml",
      price: 1450,
      oldPrice: null,
      discount: null,
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494434245/7iUL-Pb_v8-000000000494434245_1.jpg"
    },
    {
      id: 4,
      label: "NEW | SEPHORA EXCLUSIVE",
      brand: "RARE BEAUTY",
      name: "Soft Pinch Matte Bouncy Blush - 6.4g",
      price: 3400,
      oldPrice: null,
      discount: null,
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494273790/MntjDP7V4P--000000000494273790_1.jpg"
    },
    {
      id: 5,
      label: "",
      brand: "RARE BEAUTY",
      name: "Lip Soufflé Matte Cream Lipstick",
      price: 2600,
      oldPrice: 3000,
      discount: "13%",
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/sephora-collection/7016127/0/C4jyq9M2Nb-1_Product_3378872136996-Sephora-Collection-Outrageous-Plump-Lip-Gloss-01-Universal_99d6f6ad476c4133a5ea8e58526679744ebc3bb1_1620368777.png"
    },
    {
      id: 6,
      label: "NEW",
      brand: "HUDA BEAUTY",
      name: "Lip Contour Lip Stain - 1g",
      price: 2100,
      oldPrice: null,
      discount: null,
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494513277/UpjxFrT81HB-000000000494513277_1.jpg"
    },
    {
      id: 7,
      label: "",
      brand: "MAC COSMETICS",
      name: "Maximal Matte Mini Mac Lipstick - 1.8g",
      price: 3155,
      oldPrice: 4550,
      discount: "30%",
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494273781/EsoLriS3Q5-000000000494273781_1.png"
    },
    {
      id: 8,
      label: "SEPHORA EXCLUSIVE",
      brand: "SEPHORA COLLECTION",
      name: "New Cream Lip Stain - 5ml",
      price: 1450,
      oldPrice: null,
      discount: null,
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494587031/YgzSJ9Xab7-000000000494587031_1.jpg"
    },
    {
      id: 9,
      label: "NEW | SEPHORA EXCLUSIVE",
      brand: "RARE BEAUTY",
      name: "Soft Pinch Matte Bouncy Blush - 6.4g",
      price: 3400,
      oldPrice: null,
      discount: null,
      image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/sephora-collection/R69X9I74119-1/0/h_vWrnFG7G-1.jpg"
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
    },
     {
    "id": 1,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "PRO Shadow Brush #15",
    "price": 2000,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494278456/pUhN0H_xuH4-000000000494278456_1.jpg"
  },
  {
    "id": 2,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "PRO Crease Brush #19",
    "price": 2200,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/benefit-cosmetics/7004374/0/F0eTBh5Jk4-Precisely_My_Brow_Pencil_open_b_no_reflection_5_RGB_WEB_5af8bf1ec929103c19193b93a114e875f579f2c0_1523777491.png"
  },
  {
    "id": 3,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "PRO Shadow Brush #18",
    "price": 2000,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494274225/5xuYN1fVBk-000000000494274225_1.png"
  },
  {
    "id": 4,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "Essential Brush - 08 Eyeshadow",
    "price": 1300,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000493860578/gAgZSjYsd2-000000000493860578_1.png"
  },
  {
    "id": 5,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "Essential Brush - 09 Crease",
    "price": 1300,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494273917/UlfDXoYfML-000000000494273917_1.png"
  },
  {
    "id": 6,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "Essential Brush - 10 Smudger",
    "price": 1300,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494513569/zJjlHIVtx7j-000000000494513569_1.jpg"
  },
  {
    "id": 7,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "Precision Eyeliner Brush #23",
    "price": 1400,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494513273/JAgCoCHGiS-000000000494513273_1.jpg"
  },
  {
    "id": 8,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "PRO Brow Brush #20",
    "price": 1500,
    "oldPrice": 1700,
    "discount": "12%",
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494433018/zJezM_DTPx-000000000494433018_1.jpg"
  },
  {
    "id": 9,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "Classic Shadow Brush",
    "price": 1100,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/lanc%EF%BF%BDme/HPRJ9005FUV-1/0/9UfEkTwWgY-1.jpg"
  },
  {
    "id": 10,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "Smudge Brush #11",
    "price": 1350,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000493712609/fiv3OEJFV3-000000000493712609_1.png"
  },
  {
                "id": 1,
                "label": "NEW",
                "brand": "RARE BEAUTY",
                "name": "Soft Pinch Tinted Lip Oil",
                "price": 2400,
                "oldPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494573440/aTxqP9aX_-000000000494573440_1.jpg"
            },
            {
                "id": 2,
                "label": "SEPHORA EXCLUSIVE",
                "brand": "HUDA BEAUTY",
                "name": "Liquid Matte Lipstick",
                "price": 2200,
                "oldPrice": 2600,
                "discount": "15%",
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494573440/aTxqP9aX_-000000000494573440_1.jpg"
            },
            {
                "id": 3,
                "label": "",
                "brand": "FENTY BEAUTY",
                "name": "Gloss Bomb Universal Lip Luminizer",
                "price": 1950,
                "oldPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/sephora-collection/7016127/0/C4jyq9M2Nb-1_Product_3378872136996-Sephora-Collection-Outrageous-Plump-Lip-Gloss-01-Universal_99d6f6ad476c4133a5ea8e58526679744ebc3bb1_1620368777.png"
            },
            {
                "id": 4,
                "label": "NEW",
                "brand": "RARE BEAUTY",
                "name": "Kind Words Matte Lipstick",
                "price": 2600,
                "oldPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494273811/9d5iWXDYlug-000000000494273811_1.jpg"
            },
            {
                "id": 5,
                "label": "SEPHORA COLLECTION",
                "brand": "SEPHORA COLLECTION",
                "name": "Cream Lip Stain Liquid Lipstick",
                "price": 1450,
                "oldPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494434245/7iUL-Pb_v8-000000000494434245_1.jpg"
            },
            {
                "id": 6,
                "label": "",
                "brand": "MAC COSMETICS",
                "name": "Retro Matte Lipstick - Ruby Woo",
                "price": 2900,
                "oldPrice": 3400,
                "discount": "15%",
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494447578/nZht5Q-OOr-000000000494447578_1.jpg"
            },
            {
                "id": 7,
                "label": "LIMITED EDITION",
                "brand": "DIOR",
                "name": "Lip Soufflé Matte Cream Lipstick",
                "price": 2500,
                "oldPrice": 2900,
                "discount": "14%",
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494278050/rPWLemVQC5-000000000494278050_1.png"
            },
            {
                "id": 8,
                "label": "",
                "brand": "TOO FACED",
                "name": "Melted Matte Liquid Lipstick",
                "price": 2700,
                "oldPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494513031/Ru0UjwM8v-W-000000000494513031_1.jpg"
            },
            {
                "id": 9,
                "label": "NEW | SEPHORA EXCLUSIVE",
                "brand": "DIOR",
                "name": "Lip Contour 2.0 Automatic Matte Pencil",
                "price": 1900,
                "oldPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494284368/RTL5zEJMbhy-000000000494284368_1.jpg"
            },
            {
                "id": 10,
                "label": "",
                "brand": "BENEFIT COSMETICS",
                "name": "Benetint Lip & Cheek Tint",
                "price": 2200,
                "oldPrice": 2450,
                "discount": "10%",
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494590517/HQ5fH3wXiY08-000000000494590517_1.jpg"
            },
             {
    "id": 1,
    "label": "SEPHORA COLLECTION",
    "brand": "SEPHORA COLLECTION",
    "name": "Color Hit Mini Nail Polish",
    "price": 350,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494284672/yFRe3SACJa-000000000494284672_1.jpg"
  },
  {
    "id": 2,
    "label": "NEW",
    "brand": "KAY BEAUTY",
    "name": "Matte Nail Enamel - 9ml",
    "price": 250,
    "oldPrice": 299,
    "discount": "17%",
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494513203/q3-60xapSm95-000000000494513203_01.jpg"
  },
  {
    "id": 3,
    "label": "",
    "brand": "OPI",
    "name": "Nail Lacquer - Infinite Shine",
    "price": 850,
    "oldPrice": 999,
    "discount": "15%",
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494579202/MUPt_tOfNaC-000000000494579202_1.jpg"
  },
  {
    "id": 4,
    "label": "LIMITED EDITION",
    "brand": "FACES CANADA",
    "name": "Splash Nail Enamel - 8ml",
    "price": 130,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000493651258/7ldNYUtE7gbu-000000000493651258_1.jpg"
  },
  {
    "id": 5,
    "label": "SEPHORA EXCLUSIVE",
    "brand": "SALLY HANSEN",
    "name": "Insta-Dri Nail Color",
    "price": 499,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494446964/eFB0IzKgVjGd-000000000494446964_1.jpg"
  },
  {
    "id": 6,
    "label": "",
    "brand": "LAKME",
    "name": "Absolute Gel Stylist Nail Color",
    "price": 400,
    "oldPrice": 500,
    "discount": "20%",
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494512029/JuX6JQTmlnZR-000000000494512029_1.jpg"
  },
  {
    "id": 7,
    "label": "NEW",
    "brand": "KIKO MILANO",
    "name": "Power Pro Nail Lacquer",
    "price": 550,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494284661/KHxJ64UvMh-000000000494284661_1.jpg"
  },
  {
    "id": 8,
    "label": "",
    "brand": "MAYBELLINE",
    "name": "Color Show Nail Polish",
    "price": 190,
    "oldPrice": 220,
    "discount": "14%",
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000494284665/5kQpCr7N5-000000000494284665_1.jpg"
  },
  {
    "id": 9,
    "label": "SEPHORA EXCLUSIVE",
    "brand": "NAILS INC.",
    "name": "Plant Power Vegan Nail Polish",
    "price": 1250,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000493651272/l2pxI5MHDRba-000000000493651272_1.jpg"
  },
  {
    "id": 10,
    "label": "",
    "brand": "CHAMBOR",
    "name": "Gel Effect Nail Lacquer",
    "price": 325,
    "oldPrice": null,
    "discount": null,
    "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/000000000493651222/iRMpyC8Vm3f-000000000493651222_1.jpg"
  }



  ];

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

export default All;
