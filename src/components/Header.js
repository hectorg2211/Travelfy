import React from "react";

import { FaSearch } from "react-icons/fa";
import { BsBookmarkFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

const Header = () => (
  <div className="header">
    <img
      src="../assets/Travelfy.png"
      alt="Travelfy logo"
      className="header__logo"
    />
    <form action="#" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search hotels..."
      />
      <button className="search__button">
        <FaSearch />
      </button>
    </form>
    <div className="user">
      <div className="user__bookmark">
        <BsBookmarkFill />
      </div>
      <div className="user__messages">
        <AiFillMessage />
      </div>
      <div className="user__image">
        <img src="../assets/user.jpg" alt="Hector" />
        <span>Héctor García</span>
      </div>
    </div>
  </div>
);

export default Header;
