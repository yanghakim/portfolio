import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "../sass/IntLand.sass";

class IntLand extends Component {
  render() {
    return (
      <div className="intland">
        <Header />
        <div className="intland__top">
          <div className="intland__links">
            <a
              href="http://intercessor-landing.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              site{" "}
            </a>
            <a>|</a>
            <a
              href="https://github.com/yanghakim/intercessor-landing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              code
            </a>
          </div>
          <p className="intland__header">INTERCESSOR (landing page):</p>
          <div className="intland__to">
            <button className="intland__to-learned">todo</button>
            <button className="intland__to-guide">guide</button>
            <button className="intland__to-software">tech</button>
          </div>
          <p className="intland__subheader">
            an environment to send and view prayer requests.
          </p>
        </div>
        <div className="intland__learned">
          <p className="intland__learned-header">WHAT I LEARNED:</p>
          <div className="intland__learned-body">
            <div className="intland__learned-1">
              <p className="intland__learned-1-header">[I]: Design</p>
              <p className="intland__learned-1-body">
                - considering various different design choices, I came to value
                simplicity and readability above all else, especially creating
                many features
                <br />- a visitor should be able to quickly read through a
                landing page and also digest the content easily
              </p>
            </div>
          </div>
        </div>
        <div className="intland__body">
          <div className="intland__guide">
            <p className="intland__guide-header">GUIDEBOOK:</p>
            <div className="intland__guide-1">
              <p className="intland__guide-1-header">[A] It's pretty simple</p>
              <p className="intland__guide-1-body">
                It's a landing page for an app that has a section detailing how
                to use the app and one on design choices
              </p>
            </div>
          </div>
          <div className="intland__tech">
            <p className="intland__tech-header">SOFTWARE INFRASTRUCTURE:</p>
            <div className="intland__tech-1">
              <p className="portfolio__tech-1-header">
                [front-end] Javascript:
              </p>
              <p className="portfolio__tech-1-body">
                [HTML]
                <br />
                [CSS]
                <br />
                [React.JS]
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default IntLand;
