import { React, useState } from "react";
import "./ProductsPage.css";
import MangaProducts from "../../components/MangaProducts/MangaProducts";
import BookProducts from "../../components/BookProducts/BookProducts";
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { type } = useParams();
  
  return (
    <div>
      {type === "books" ? <BookProducts /> : <MangaProducts/>}
    </div>
  );
};

export default ProductsPage;
