import React from "react";

const ExclusiveItem = ({ book }) => {
  return (
    <div className="flex flex-col min-w-80 gap-5 p-3">
      <h3 className={`text-3xl ${book.txtcolor}`}>Por apenas</h3>
      <div className="flex flex-col gap-3 text-justify p-5">
        <h1 className={`text-6xl ${book.txtcolor}`}>{book.price}</h1>
        <h3>
          <strong className="text-2xl">Box com obras {book.tittle}</strong>
        </h3>
        <h4 className="text-1xl">Contem as seguintes obras:</h4>
        <ul className="text-lg">
          {Object.values(book.books).map((innerBook, index) => {
            return <li key={index}>- {innerBook}</li>;
          })}
        </ul>
      </div>
      <button
        className={`p-2 min-w-80 ${book.bgcolor} hover:shadow-lg ${book.color} ml-3 text-white hidden w-80 md:block`}
      >
        Comprar agora
      </button>
    </div>
  );
};

export default ExclusiveItem;
