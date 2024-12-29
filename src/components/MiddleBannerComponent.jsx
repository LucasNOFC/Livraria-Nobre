import React, { useState } from "react";
import "../styles/index.css";
import bannerItems from "../data/bannerItems.json";
import BookDetails from "./BookDetails";
import btnData from '../data/bannerButton.json';
import BannerBtn from './BannerBtn/BannerBtn';

const MiddleBannerComponent = () => {
  const [index, setIndex] = useState(0);

  

  return (
    <div className="w-full flex justify-center p-5">
      <div
        className={`flex items-center md:gap-2 md:max-w-3xl max-w-md md:p-3 md:h-80 min-h-96 banner-style`}
      >
        <BannerBtn btnData={Object.values(btnData)[1]} setIndex={setIndex} index={index}/>
        <BookDetails details={bannerItems[index]} />
        <BannerBtn btnData={Object.values(btnData)[0]} setIndex={setIndex} index={index}/>
      </div>
    </div>
  );
};

export default MiddleBannerComponent;
