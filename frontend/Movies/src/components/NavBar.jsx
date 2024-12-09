import React from "react";
import { Link } from "react-router-dom";
import { BiLogoBaidu } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <Link to="/movies" className="logo">
          Movix
          <BiLogoBaidu />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/logout" className="nav-link">
          Logout
        </Link>
        <Link to="/addfavorites" className="nav-link">
          AddFavorite
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
