import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Play a game</h1>
      <div className="wrapper">
        <div id="square"></div>
        <div id="triangle"></div>
        <div id="circle"></div>
      </div>
    </header>
  );
};

export default Header;
