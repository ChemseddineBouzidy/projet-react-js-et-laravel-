import React from "react";
import SingleProduct from "./test";

// products database
const dataProducts = [
    {
        id: 1,
        name: "Pc portable",
        image: "https://tangerois.ma/23578-large_default/pc-portable-x515e-i5-1135g7-15-6-fhd-8go-512-go-ssd-win-11-asus.jpg"
    }, 
    {
        id: 2,
        name: "Iphone 18 Pro max",
        image: "https://www.pngplay.com/wp-content/uploads/13/iPhone-Background-PNG.png"
    },
    {
        id: 3,
        name: "Ipad",
        image: "https://w7.pngwing.com/pngs/1/811/png-transparent-ipad-pro-12-9-inch-2nd-generation-apple-a10x-ipad-electronics-gadget-mobile-phone-thumbnail.png"
    }
]



function Products() {
    return (
        <>
            <h1>Mes produits</h1>
            <div className="products">
                {
                    dataProducts.map((item) => {
                        return <SingleProduct product={item} />
                    })
                }
            </div>
        </>
    );
}

export default Products;
---