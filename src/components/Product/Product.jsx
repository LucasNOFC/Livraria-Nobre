import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="card-product">
      <div className="product-image">
        <img src={product.image} className="image" alt={product.tittle} />
      </div>
      <div className="product-info">
        <div>
          <p className="product-name">{product.tittle}</p>
          <p className="product-author">{product.Author}</p>
        </div>
        <div>
          <p className="product-price">R${product.Price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
