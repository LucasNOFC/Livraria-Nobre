import React from "react";
import exclusiveBooks from "../data/exclusiveBooks.json";
import "../styles/index.css";
import ExclusiveProductCard from "./ExclusiveProductCard/ExclusiveProductCard";

const ExclusiveProduct = () => {

  return (
    <div>
      {exclusiveBooks.map((book) => (
        <ExclusiveProductCard key={book.id} book={book}/>
      ))}
    </div>
  );
};

export default ExclusiveProduct;
