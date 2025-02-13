import React from "react";

function SingleProduct({product}) {
    return (
        <div className="product">
            <img
                src={product.image}
                alt=""
                width={100}
            />
            <div className="details">
                <h2>{product.name}</h2>
            </div>
        </div>
    );
}

export default SingleProduct;
