import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Details from "./Details";

import "../sass/App.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Details />
    </div>
  );
};

export default App;
