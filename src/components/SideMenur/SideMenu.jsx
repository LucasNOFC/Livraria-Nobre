import React, { useState, useEffect } from "react";
import "./SideMenu.css";
import Gender from "../Gender/Gender";
import genderClassification from "../../data/gender.json";
import authorList from "../../data/products.json";
import Condiction from "../Condiction/Condiction";
import Author from "../Author/Author";

const SideMenu = () => {
  const condictionFilter = ["Novo", "Usado"];
  const authorNameList = [];

  authorList.map((item) => {
    !authorNameList.includes(item.Author)
      ? authorNameList.push(item.Author)
      : null;
  });

  const [checkboxes, setCheckboxes] = useState(() => {
    const initalState = {};

    authorNameList.forEach((author) => {
      initalState[author] = false;
    });

    condictionFilter.forEach((cond) => {
      initalState[cond] = false;
    });

    genderClassification.forEach((gender) => {
      initalState[gender.genderName] = false;
    });

    return initalState;
  });

  const handleCheckboxChange = (genderName) => {
    setCheckboxes((prevState) => {
      const updatedState = {
        ...prevState,
        [genderName]: !prevState[genderName],
      };
      
      console.log(
        `${genderName} foi ${updatedState[genderName] ? "ativado" : "desativado"}`
      );

      return updatedState;
    });
  };

  return (
    <div className="h-full w-full">
      <div className="p-3 flex flex-col items-center justify-center container-side">
        <div className="filter-container">
          <h2 className="filter-tittle">Pesquisa</h2>
          <input
            className="search-input"
            placeholder="Pesquise algum produto"
            type="text"
          />
        </div>
        <div className="filter-container">
          <h2 className="filter-tittle">Gêneros</h2>
          {genderClassification.map((genderItem, index) => {
            return <Gender 
            genderType={genderItem.genderName} 
            key={index}
            isChecked={checkboxes[genderItem.genderName]}
            onToggle={handleCheckboxChange}
            />;
          })}
        </div>
        <div className="filter-container">
          <h2 className="filter-tittle">Condição</h2>
          {condictionFilter.map((item, index) => {
            return <Condiction
            name={item}
            key={index}
            isChecked={checkboxes[item[index]]}
            onToggle={handleCheckboxChange}
            />;
          })}
        </div>
        <div className="filter-container author-container">
          <h2 className="filter-tittle">Autor</h2>
          {authorNameList.map((nameAuthor, index) => {
            return <Author
            authorName={nameAuthor}
            key={index}
            isChecked={checkboxes[nameAuthor[index]]}
            onToggle={handleCheckboxChange} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
