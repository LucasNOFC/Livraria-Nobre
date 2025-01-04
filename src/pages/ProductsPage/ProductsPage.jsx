import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";
import Product from "../../components/Product/Product";
import productsJson from "../../data/products.json";
import SideMenu from "../../components/SideMenu/SideMenu";

const ProductsPage = () => {
  const [filterProducts, setFilteredProducts] = useState(productsJson);

  const navigate = useNavigate();

  const handleNavigate = (product) => {
    navigate(`/product-page/${product.id}`, {
      state: {
        ...product,
        path: "/products",
      },
    });
  };

  return (
    <div className="container">
      <div className="side-menu">
        <SideMenu setFilteredProducts={setFilteredProducts} />
      </div>
      <div className="products-list">
        <div className="products-item">
          {filterProducts.map((item) => {
            return (
              <Product
                product={item}
                key={item.id}
                onClick={() => handleNavigate(item)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
