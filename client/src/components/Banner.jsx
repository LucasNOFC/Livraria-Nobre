import React from "react";
import "../styles/index.css";
import "../styles/custom.css";
import MiddleBannerComponent from "./MiddleBannerComponent/MiddleBannerComponent";


const Banner = () => {
  
  return (
    <div className="bg-white banner-bg w-full flex items-center justify-between">
      <MiddleBannerComponent/>
    </div>
  );
};

export default Banner;
