import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinked = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
      <li>
        <NavLink to="/">Sign Up</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinked;
