import React from "react";
import List from "../List/List";
import Content from "../Content/Content";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="md:w-9/12 md:h-lvh gap-10 m-auto p-5 flex md:flex-row flex-col items-center justify-center">
      <div className="flex flex-col md:gap-6 gap-8 p-3 md:w-3/6 w-5/6">
        <Content />
        <List />
        <Link className="bg-lime-600 w-64 p-4 text-white font-bold shadow-md shadow-black hover:bg-lime-700 hover:font-extrabold text-center decoration-transparent"
        to="/exclusive-products">
          Venha descobrir!
        </Link>
      </div>
      <div className="flex items-center justify-center p-3">
        <img
          src="../../public/images/Estante.png"
          alt="Estante vetorial"
          className="w-9/12 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Section;
