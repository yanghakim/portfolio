import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "../sass/Home.sass";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="home__blocks">
          <NavLink className="home__blockone" to={"/intweb"}>
            <p className="home__blockone-title">july 2019 | project one:</p>
            <p className="home__blockone-name">intercessor.web</p>
            <p className="home__blockone-description">
              a WEB app for SHARING PRAYER REQUESTS
            </p>
            <p className="home__blockone-tech">
              Javascript [React, Redux, SASS, HTML]
              <br />
              Node.JS [Express, MongoDB, Passport]
            </p>
          </NavLink>
          <NavLink className="home__blocktwo" to={"/intapp"}>
            <p className="home__blocktwo-title">future | project two:</p>
            <p className="home__blocktwo-name">intercessor.mobile</p>
            <p className="home__blocktwo-description">
              a MOBILE app for SHARING PRAYER REQUESTS
            </p>
            <p className="home__blocktwo-tech">
              Javascript [React-Native, Redux, SASS, HTML]
              <br />
              Node.JS [Express, MongoDB, Passport]
            </p>
          </NavLink>
          <NavLink className="home__blockthree" to={"/intland"}>
            <p className="home__blockthree-title">july 2019 | project three:</p>
            <p className="home__blockthree-name">intercessor.landing</p>
            <p className="home__blockthree-description">
              a WEB site serving as a landing page for intercessor.app
            </p>
            <p className="home__blockthree-tech">
              Javascript [React, SASS, HTML]
            </p>
          </NavLink>
          <NavLink className="home__blockthree" to={"/foursl"}>
            <p className="home__blockthree-title">april 2019 | project four:</p>
            <p className="home__blockthree-name">4 spiritual laws.html</p>
            <p className="home__blockthree-description">
              a WEB site navigating through the 4 SPIRITUAL LAWS
            </p>
            <p className="home__blockthree-tech">Javascript [HTML, CSS]</p>
          </NavLink>
          <NavLink className="home__blockfour" to={"/portfolio"}>
            <p className="home__blockfour-title">ongoing | project five:</p>
            <p className="home__blockfour-name">personal portfolio</p>
            <p className="home__blockfour-description">
              a WEB site personal portfolio
            </p>
            <p className="home__blockfour-tech">
              Javascript [HTML, CSS] <br />
              Node.JS [Express]
            </p>
          </NavLink>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
