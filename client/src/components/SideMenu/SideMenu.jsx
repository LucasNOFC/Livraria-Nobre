import React, { useState } from "react";
import "./SideMenu.css";
import Gender from "../Gender/Gender";
import productData from "../../data/products.json";
import Condiction from "../Condiction/Condiction";
import Author from "../Author/Author";

const SideMenu = ({ setFilteredProducts }) => {
  const productGender = [
    ...new Set(productData.map((product) => product.type.genderName)),
  ];

  const condictionFilter = ["Novo", "Usado"];
  const authorNameList = [];

  productData.map((item) => {
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

    productGender.forEach((gender) => {
      initalState[gender.genderName] = false;
    });

    return initalState;
  });

  const handleCheckboxChange = (key) => {
    setCheckboxes((prevState) => {
      const updatedState = {
        ...prevState,
        [key]: !prevState[key],
      };

      const activeFilters = {
        genres: Object.keys(updatedState).filter(
          (filterKey) =>
            updatedState[filterKey] && productGender.includes(filterKey)
        ),
        conditions: Object.keys(updatedState).filter(
          (filterKey) =>
            updatedState[filterKey] && condictionFilter.includes(filterKey)
        ),
        authors: Object.keys(updatedState).filter(
          (filterKey) =>
            updatedState[filterKey] && authorNameList.includes(filterKey)
        ),
      };

      const isAnyFilterActive =
        activeFilters.genres.length > 0 ||
        activeFilters.conditions.length > 0 ||
        activeFilters.authors.length > 0;

      const filteredProducts = isAnyFilterActive
        ? productData.filter((product) => {
            const matchesGenre =
              activeFilters.genres.length === 0 ||
              activeFilters.genres.includes(product.type.genderName);
            const matchesCondition =
              activeFilters.conditions.length === 0 ||
              activeFilters.conditions.includes(
                product.isNew ? "Novo" : "Usado"
              );
            const matchesAuthor =
              activeFilters.authors.length === 0 ||
              activeFilters.authors.includes(product.Author);

            return matchesGenre && matchesCondition && matchesAuthor;
          })
        : productData;

      setFilteredProducts(filteredProducts);

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
        <div className="filter-options">
          <div className="filter-container">
            <h2 className="filter-tittle">Gêneros</h2>
            {productGender.map((gender, index) => {
              return (
                <Gender
                  genderType={gender}
                  key={index}
                  isChecked={checkboxes[gender]}
                  onToggle={handleCheckboxChange}
                />
              );
            })}
          </div>
          <div className="filter-container">
            <h2 className="filter-tittle">Condição</h2>
            {condictionFilter.map((item, index) => {
              return (
                <Condiction
                  name={item}
                  key={index}
                  isChecked={checkboxes[item]}
                  onToggle={handleCheckboxChange}
                />
              );
            })}
          </div>
          <div className="filter-container author-container">
            <h2 className="filter-tittle">Autor</h2>
            {authorNameList.map((nameAuthor, index) => {
              return (
                <Author
                  authorName={nameAuthor}
                  key={index}
                  isChecked={checkboxes[nameAuthor]}
                  onToggle={handleCheckboxChange}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
