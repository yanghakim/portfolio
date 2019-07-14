import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "../sass/IntApp.sass";

class IntApp extends Component {
  render() {
    return (
      <div className="intapp">
        <Header />
        <div className="intapp__top">
          <div className="intapp__links">
            <a>in progress</a>
          </div>
          <p className="intapp__header">INTERCESSOR (mobile app):</p>
          <div className="intapp__to">
            <button className="intapp__to-learned">todo</button>
            <button className="intapp__to-guide">guide</button>
            <button className="intapp__to-software">tech</button>
          </div>
          <p className="intapp__subheader">
            an environment to send and view prayer requests.
          </p>
        </div>
        <div className="intapp__learned">
          <p className="intapp__learned-header">WHAT I ANTICIPATE LEARNING:</p>
          <div className="intapp__learned-body">
            <div className="intapp__learned-1">
              <p className="intapp__learned-1-header">[I]: React Native</p>
              <p className="intapp__learned-1-body">
                - carefully navigating differences between react-native and
                react
              </p>
            </div>
            <div className="intapp__learned-2">
              <p className="intapp__learned-2-header">
                [II]: Mobile Environments
              </p>
              <p className="intapp__learned-2-body">
                - learning coding and software standards/practices for mobile
                development
              </p>
            </div>
          </div>
        </div>
        <div className="intapp__body">
          <div className="intapp__guide">
            <p className="intapp__guide-header">GUIDEBOOK:</p>
            <div className="intapp__guide-1">
              <NavLink className="intapp__guide-1-header" to={"/intweb"}>
                see INTERCESSOR.web:
              </NavLink>
            </div>
          </div>
          <div className="intapp__tech">
            <p className="intapp__tech-header">SOFTWARE INFRASTRUCTURE:</p>
            <div className="intapp__tech-1">
              <p className="intapp__tech-1-header">tbd</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default IntApp;
