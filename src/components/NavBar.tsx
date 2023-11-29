import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="min-w-[250px] flex font-bold text-xl">
      <NavLink to="/" className="navlink">
        Home
      </NavLink>
      <NavLink to="/watchlist" className="navlink">
        Watch List
      </NavLink>
    </div>
  );
};

export default NavBar;
