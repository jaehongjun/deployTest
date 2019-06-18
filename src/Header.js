import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const {
    user: { name, loggedIn }
  } = useContext(UserContext);
  console.log(useContext(UserContext));
  return (
    <header>
      <a href="#">Home</a> Hello, {name}, you are{" "}
      {loggedIn ? "Logged in" : "anonymous"}
    </header>
  );
};

export default Header;
