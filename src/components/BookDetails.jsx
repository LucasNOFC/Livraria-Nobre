import React from "react";
import "../styles/custom.css";

const BookDetails = ({details}) => {
  return (
      <div className="flex banner-size md:flex-row flex-col items-center md:justify-evenly gap-5 md:p-3 mb-2">
        <div>
          <img
            src={details.pic}
            alt="Capa de AOT"
            className="manga-image md:block hidden rounded-xl shadow-md shadow-gray-400 w-60"
          />
        </div>
        <div className="flex flex-col md:w-5/12 gap-3 md:min-h-82 min-w-96">
          <h3 className="text-2xl">{details.bookName}</h3>
          <div className="p-2 flex flex-col gap-2 text-justify">
              <strong>{details.author}</strong>
            <p>{details.sinopse}</p>
            <button className="bg-gray-900 box-shadow p-1 text-white min-w-80 mt-5 rounded">
              Saiba mais!
            </button>
          </div>
        </div>
      </div>
  );
};

export default BookDetails;
