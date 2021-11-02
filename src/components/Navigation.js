import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation = () => (
  <aside className="navigation">
    <div className="side-nav">
      <NavigationItem text="Hotel" />
      <NavigationItem text="Flight" />
      <NavigationItem text="Car Rental" />
      <NavigationItem text="Tours" />
    </div>

    <div className="navigation__copyright">
      2017 by Trillo. All rights reserved.
    </div>
  </aside>
);

export default Navigation;
