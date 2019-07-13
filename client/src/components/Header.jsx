import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import icon from "../images/favicon.png";

import "../sass/Header.sass";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to={"/"} className="header__left">
          <img src={icon} alt="yangha kim" width="60" height="60" />
          <p className="header__left-greeting">
            Yangha Kim
            <br />
            Full-stack developer from Philadelphia.
            <br />I enjoy designing and developing engaging software
            experiences.
          </p>
        </NavLink>
        <div className="header__nav">
          <Link to={"/"} className="header__nav-btn">
            home
          </Link>

          <Link to={"/contact"} className="header__nav-btn">
            contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
