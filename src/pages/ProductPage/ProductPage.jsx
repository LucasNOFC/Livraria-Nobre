import React from "react";
import "./ProductPage.css";
import Product from "../../components/Product/Product";
import productsJson from "../../data/products.json";
import SideMenu from "../../components/SideMenur/SideMenu";

const ProductPage = () => {
  return (
    <div className="container">
      <div className="side-menu">
        <SideMenu />
      </div>
      <div className="products-list">
        <div className="products-item">
          {productsJson.map((item) => {
            return <Product product={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
