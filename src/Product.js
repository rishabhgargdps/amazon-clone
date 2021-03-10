import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/*For number of stars*/}
          {Array(rating)
            .fill()
            .map((_, __) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="image not available" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
