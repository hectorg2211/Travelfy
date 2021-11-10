import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer__book-now">
        GOOD NEWS! WE HAVE 4 FREE ROOMS FOR YOUR SELECTED DATES!
      </h2>
      <button className="footer__btn">
        <span className="visible">Book now</span>
        <span className="invisible">Only 3 rooms left</span>
      </button>
    </div>
  );
};

export default Footer;
