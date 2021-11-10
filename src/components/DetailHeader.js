import React from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

const DetailHeader = () => {
  return (
    <div className="detail-main">
      <h2 className="detail-main__title">Hotel las palmas</h2>
      <div className="detail-main__stars">
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSLine />
      </div>
      <span className="detail-main__location">Albufeira, Portugal</span>
      <div className="detail-main__votes">
        <h2 className="average">9.4</h2>
        <span className="count">234 Votes</span>
      </div>
    </div>
  );
};

export default DetailHeader;
