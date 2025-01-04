import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookDetails.css";

const BookDetails = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = (product) => {
    navigate(`/product-page/${product.id}`, {
      state: {
        ...product,
        path: "/exclusive-products",
      },
    });
  };

  return (
    <div className="flex banner-size md:flex-row flex-col items-center md:justify-evenly  book-container md:p-3 mb-2">
      <div className="book-image-container">
        <img
          src={product.image}
          alt="Capa de AOT"
          className="manga-image md:block hidden rounded-xl shadow-md shadow-gray-400 w-60"
        />
      </div>
      <div className="flex flex-col md:w-5/12 gap-3 md:min-h-82 min-w-96 book-info-container">
        <h3 className="text-2xl">{product.tittle}</h3>
        <div className="p-2 flex flex-col gap-2 text-justify">
          <strong>Por {product.Author}</strong>
          <p>R$ {product.Price}</p>
          <button
            onClick={() => handleNavigate(product)}
            className="bg-gray-900 box-shadow p-1 text-white min-w-80 w-72 mt-5 rounded text-center"
          >
            Saiba mais!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
