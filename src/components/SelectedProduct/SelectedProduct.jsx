import React from "react";
import arrowBack from '../../../public/images/arrowback.svg';
import "./SelectedProduct.css";
import { Link } from "react-router-dom";

const SelectedProduct = ({ tittle, author, price, image, path }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-14 p-10 selected-product-container">
        <Link to={path}><img src={arrowBack} alt="Voltar" className="return-button"/></Link>
        <div>
          <img src={image} alt="test" className="w-64 p-1" />
        </div>
        <div className="info-container">
          <div className="product-details">
            <h1 className="product-tittle">{tittle}</h1>
            <h3 className="product-author">Por {author}</h3>
            <p className="product-price">R${price}</p>
          </div>
          <button className="buy-button">Comprar agora</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
