import React, { useContext } from "react";

const Header = () => {
  return (
    <header>
      <a href="#">Home</a> Hello, {name}, you are{" "}
      {loggedIn ? "Logged in" : "anonymous"}
    </header>
  );
};

export default Header;
