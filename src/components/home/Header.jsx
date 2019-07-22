import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import icon from "../../images/favicon.png";

import "../../sass/Header.sass";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to={"/"} className="header__left">
          <img src={icon} alt="yangha kim" width="60" height="60" />
          <p className="header__left-greeting">
            Yangha Kim
            <br />
            yanghakim0@gmail.com
          </p>
        </NavLink>
      </div>
    );
  }
}

export default Header;
