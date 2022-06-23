import { Avatar } from "@mui/material";
import React from "react";
import "./NavBar.css";
import Sandyy from "./images/Sandyy.jpg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__left__logo">
          <img className="navbar__left__logo__avatar" src={Sandyy} />
        </div>
        <div className="navbar__left__fullname">
          <h1>Sudharsan</h1> <span>Devakumar</span>
        </div>
      </div>

      <div className="navbar__right">
        <div className="navbar__right__option--active">
          <a href="">Home</a>
        </div>
        <div className="navbar__right__option">
          <a href="#aboutme">About Me</a>
        </div>
        <div className="navbar__right__option">
          <a href="#certificates">Certificates</a>
        </div>
        <div className="navbar__right__option">
          <a href="#skills">Skills</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
