import React from "react";

const Details = () => (
  <div className="details">
    <div className="detail-imgs">
      <img
        src="../assets/hotel-1.jpg"
        alt="hotel 1"
        className="detail-imgs__img"
      />
      <img
        src="../assets/hotel-2.jpg"
        alt="hotel 1"
        className="detail-imgs__img"
      />
      <img
        src="../assets/hotel-3.jpg"
        alt="hotel 1"
        className="detail-imgs__img"
      />
    </div>

    <div className="detail-main">
      <h2 className="detail-main__title">Hotel las palmas</h2>
      <div className="detail-main__stars">*****</div>
      <span className="detail-main__location">Albufeira, Portugal</span>
      <div className="detail-main__votes">
        <h2 className="average">9.4</h2>
        <span className="count">234 Votes</span>
      </div>
    </div>
  </div>
);

export default Details;
