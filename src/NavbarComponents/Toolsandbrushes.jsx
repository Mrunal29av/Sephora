import React from "react";
import "./Toolsandbrushes.css";
import AutoCarousel from "./AutoCarousel";


function Toolsandbrushes() {

    const Tools =
        [
            {
                "label": "HOT",
                "brand": "BEAUTYBLENDER",
                "title": "DiscoGlow Inferno Essentials Set (Holiday Limited Edition)",
                "price": "₹1,900",
                "originalPrice": "₹3,800",
                "discount": "50%",
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/beautyblender/7023646/0/wUFbr5L0zC-1_Product_815985028822-Beautyblender-Discglow-Inferno-Essentials-Set-Christmas-Limited-Edi_2acb4d104f966fd0326490fcbf67c66eba40d755_1661701795.png"
            },
            {
                "label": "NEW",
                "brand": "SEPHORA COLLECTION",
                "title": "Glitter Power Eye Brushes Set",
                "price": "₹3,600",
                "originalPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/sephora-collection/7026085/0/qaj5TYDkhy-1_Product_3378872219064-Sephora-Collection-Glitter-Power-Eye-Brushes-Set-Default_9bf4da0dd493c256d1cdda691e845acaf6bf6c16_1691732336.png"
            },
            {
                "label": "BESTSELLER",
                "brand": "HUDA BEAUTY",
                "title": "Glowish Airbrush Finish Face Brush",
                "price": "₹1,450",
                "originalPrice": "₹2,900",
                "discount": "50%",
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/huda-beauty/7019957/0/-lECW6edF9-1_Product_6291106037913-Huda-Beauty-Glowish-Airbrush-Finish-Face-Brush-Default_6a444def7480f74b4f9908c784d890af4d7c384b_1688445261.png"
            },
            {
                "label": "NEW",
                "brand": "HUDA BEAUTY",
                "title": "Face | Conceal & Blend Makeup Brush",
                "price": "₹2,300",
                "originalPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/huda-beauty/7021955/0/ps0seqjOJO-1_Product_6294018400264-Huda-Beauty-Face-Conceal-Blend-Makeup-Brush-Default_d453620cd022794a7e452c2cf6d3d2b25576d47e_1654109369.png"
            },
            {
                "label": "HOT",
                "brand": "BEAUTYBLENDER",
                "title": "DiscoGlow Inferno Essentials Set (Holiday Limited Edition)",
                "price": "₹1,900",
                "originalPrice": "₹3,800",
                "discount": "50%",
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/beautyblender/7023646/0/wUFbr5L0zC-1_Product_815985028822-Beautyblender-Discglow-Inferno-Essentials-Set-Christmas-Limited-Edi_2acb4d104f966fd0326490fcbf67c66eba40d755_1661701795.png"
            },
            {
                "label": "NEW",
                "brand": "SEPHORA COLLECTION",
                "title": "Glitter Power Eye Brushes Set",
                "price": "₹3,600",
                "originalPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/sephora-collection/7026085/0/qaj5TYDkhy-1_Product_3378872219064-Sephora-Collection-Glitter-Power-Eye-Brushes-Set-Default_9bf4da0dd493c256d1cdda691e845acaf6bf6c16_1691732336.png"
            },
            {
                "label": "BESTSELLER",
                "brand": "HUDA BEAUTY",
                "title": "Glowish Airbrush Finish Face Brush",
                "price": "₹1,450",
                "originalPrice": "₹2,900",
                "discount": "50%",
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/huda-beauty/7019957/0/-lECW6edF9-1_Product_6291106037913-Huda-Beauty-Glowish-Airbrush-Finish-Face-Brush-Default_6a444def7480f74b4f9908c784d890af4d7c384b_1688445261.png"
            },
            {
                "label": "NEW",
                "brand": "HUDA BEAUTY",
                "title": "Face | Conceal & Blend Makeup Brush",
                "price": "₹2,300",
                "originalPrice": null,
                "discount": null,
                "image": "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:360/huda-beauty/7021955/0/ps0seqjOJO-1_Product_6294018400264-Huda-Beauty-Face-Conceal-Blend-Makeup-Brush-Default_d453620cd022794a7e452c2cf6d3d2b25576d47e_1654109369.png"
            }



        ]

    const bannerimages = [
        "https://images-static.nykaa.com/uploads/a7d30945-faea-4abd-af1f-ab247a27a0bf.jpg?tr=cm-pad_resize,w-1200",
        "https://images-static.nykaa.com/uploads/0d33d4a4-2e56-404d-95c9-7a8d461f2e76.jpg?tr=cm-pad_resize,w-1200",
        "https://images-static.nykaa.com/uploads/a10a31c4-77c2-4907-a3be-d02ca483efd2.jpg?tr=cm-pad_resize,w-1200"
    ]


    return (



        <>
            <div className="makeup-banner">
                <img
                    src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/baFgnVOlg-WEB-TOOLS-_-BRUSHES-BANNER.jpg"
                    alt="Tools and Brushes"
                />

                <AutoCarousel images={bannerimages}/>
      </div>



            <div className="makeup-product-grid">
                {
                    Tools.map((tool) => (
                        <div className="product-card">

                            <img src={tool.image} className="product-image"></img>
                            <span className="product-label">{tool.label}</span>
                            <h5 className="brand-name">{tool.brand}</h5>
                            <p className="product-name">{tool.title}</p>
                            <div className="product-price">
                                ₹{tool.price.toLocaleString()}
                                {tool.originalPrice && (
                                    <>
                                        <span className="old-price"> ₹{tool.originalPrice.toLocaleString()}</span>
                                        <span className="discount"> ({tool.discount})</span>
                                    </>
                                )}
                            </div>


                        </div>



                    ))
                }


            </div>

        </>
    )
}

export default Toolsandbrushes;