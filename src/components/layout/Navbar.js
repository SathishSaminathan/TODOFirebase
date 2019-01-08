import React from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinked from "./SignedOutLinked";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ToDo
        </Link>
        <SignedInLinks/>
        <SignedOutLinked/>
      </div>
    </nav>
  );
};

export default Navbar;
