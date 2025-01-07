import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductPage.css";
import SelectedProduct from "../../components/SelectedProduct/SelectedProduct";

const ProductPage = () => {
  const location = useLocation();
  const {tittle, Author, Price, image, path} = location.state;

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SelectedProduct
        tittle={tittle}
        author={Author}
        price={Price}
        image={image}
        path={path}
      />
    </div>
  );
};

export default ProductPage;
