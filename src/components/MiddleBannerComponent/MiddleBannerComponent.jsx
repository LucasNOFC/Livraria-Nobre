import React, { useState } from "react";
import products from "../../data/products.json";
import BookDetails from "../BookDetails/BookDetails";
import btnData from "../../data/bannerButton.json";
import BannerBtn from "../BannerBtn/BannerBtn";
import "./MiddleBannerComponent.css";

const MiddleBannerComponent = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex justify-center p-5 banner-component">
      <div
        className={`flex items-center md:gap-2 md:max-w-4xl banner-container max-w-md md:p-3 md:h-80 min-h-96 banner-style justify-center`}
      >
        <BannerBtn
          btnData={Object.values(btnData)[1]}
          setIndex={setIndex}
          index={index}
        />
        <BookDetails product={products[index]} />
        <BannerBtn
          btnData={Object.values(btnData)[0]}
          setIndex={setIndex}
          index={index}
        />
      </div>
    </div>
  );
};

export default MiddleBannerComponent;
