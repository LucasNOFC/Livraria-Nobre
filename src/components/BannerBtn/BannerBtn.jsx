import React from 'react'
import bannerItems from "../../data/bannerItems.json";

const BannerBtn = ({btnData, setIndex, index}) => {

  const handleBannerBackward = () => {
    if (index === 0) setIndex(bannerItems.length - 1);
    else {
      setIndex((prev) => prev - 1);
    }
  };
  
  const handleBannerForward = () => {
    if (index === bannerItems.length - 1) setIndex(0);
    else {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    
    <button className="h-10 p-2" onClick={!btnData.isForward ? handleBannerBackward : handleBannerForward}>
    <img
      src={btnData.btnImage}
      className="arrow-color arrow-btn arrow-btn.md"
      alt={btnData.altText}
    />
    </button>
  )
}

export default BannerBtn