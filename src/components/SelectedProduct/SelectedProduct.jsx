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
          <img src={image} alt="test" className="product-item-image"/>
        </div>
        <div className="info-container">
          <div className="product-details">
            <p className="for-only">Por apenas</p>
            <div className="product-item-information">
              <p className="product-item-price">R${price}</p>
              <h1 className="product-item-tittle">{tittle}</h1>
              <h3 className="product-item-author">Por <span className="author-stlye">{author}</span></h3>
            </div>
          </div>
          <button className="buy-button">Comprar agora</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
