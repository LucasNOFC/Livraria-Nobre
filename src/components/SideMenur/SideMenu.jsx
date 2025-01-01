import React, { useState, useEffect } from "react";
import "./SideMenu.css";
import Gender from "../Gender/Gender";
import genderClassification from "../../data/gender.json";
import authorList from "../../data/products.json";
import Condiction from "../Condiction/Condiction";
import Author from "../Author/Author";

const SideMenu = () => {
  const condictionFilter = ["Novo", "Usado"];
 
  const authorNameList = []

  authorList.map(item => {
    !authorNameList.includes(item.Author) ? authorNameList.push(item.Author) : null
  })

  console.log(authorNameList);

  return (
    <div className="h-full w-full">
      <div className="p-3 flex flex-col items-center justify-center">
        <div className="filter-container">
          <h2 className="filter-tittle">Gêneros</h2>
          {genderClassification.map((genderItem, index) => {
            return <Gender genderType={genderItem.genderName} key={index} />;
          })}
        </div>
        <div className="filter-container">
          <h2 className="filter-tittle">Condição</h2>
          {condictionFilter.map((item, index) => {
            return <Condiction name={item} key={index} />;
          })}
        </div>
        <div className="filter-container author-container">
          <h2 className="filter-tittle">Autor</h2>
            {authorNameList.map((nameAuthor, index) => {
              return <Author authorName={nameAuthor} key={index}/>;
            })}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
