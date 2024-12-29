import React from "react";
import ExclusiveItem from "../ExclusiveItem/ExclusiveItem";

const ExclusiveProductCard = ({ book }) => {
  return (
    <div className="flex justify-center items-center" key={book.id}>
      <div
        className={`flex flex-col ${
          book.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } flex-nowrap items-center w-full p-10 gap-6`}
      >
        <ExclusiveItem book={book} />
        <img src={book.imageURL} className="md:w-2/4 w-3/4" alt="Box Image" />
        <button
          className={`p-2 ${book.bgcolor} hover: ml-3 text-white w-7/12 md:hidden block`}
        >
          Comprar agora
        </button>
      </div>
    </div>
  );
};

export default ExclusiveProductCard;
