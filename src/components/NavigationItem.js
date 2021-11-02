import React from "react";

const NavigationItem = ({ text }) => {
  return (
    <div className="side-nav__item">
      <a href="#" className="side-nav__link">
        {text}
      </a>
    </div>
  );
};

export default NavigationItem;
