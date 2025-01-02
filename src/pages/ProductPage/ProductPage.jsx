import {React, useState} from "react";
import "./ProductPage.css";
import Product from "../../components/Product/Product";
import productsJson from "../../data/products.json";
import SideMenu from "../../components/SideMenu/SideMenu";



const ProductPage = () => {
  const [filterProducts, setFilteredProducts] = useState(productsJson)


  return (
    <div className="container">
      <div className="side-menu">
        <SideMenu setFilteredProducts={setFilteredProducts}/>
      </div>
      <div className="products-list">
        <div className="products-item">
          {filterProducts.map((item) => {
            return <Product product={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
