import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../sass/Portfolio.sass";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Header />
        <div className="portfolio__top">
          <div className="portfolio__links">
            <a href="https://yanghakim.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              site{" "}
            </a>
            <a>|</a>
            <a href="https://github.com/yanghakim/portfolio" target="_blank" rel="noopener noreferrer">
              {" "}
              code
            </a>
          </div>
          <p className="portfolio__header">PERSONAL PORTFOLIO:</p>
          <div className="portfolio__to">
            <button className="portfolio__to-learned">learned</button>
            <button className="portfolio__to-guide">guide</button>
            <button className="portfolio__to-software">tech</button>
          </div>
          <p className="portfolio__subheader">
            a brief walkthrough of my projects.
          </p>
        </div>
        <div className="portfolio__learned">
          <p className="portfolio__learned-header">WHAT I LEARNED:</p>
          <div className="portfolio__learned-body">
            <div className="portfolio__learned-1">
              <p className="portfolio__learned-1-header">[I]: Refreshing</p>
              <p className="portfolio__learned-1-body">
                - refreshing to start up a new project
                <br />
                - getting to work on a different kind of design
                <br />
              </p>
            </div>
            <div className="portfolio__learned-2">
              <p className="portfolio__learned-2-header">[II]: Testament</p>
              <p className="portfolio__learned-2-body">
                - evidenced coding foundations from previous months of
                consistent coding
                <br />- better coding practices, such as BEM naming and
                component architecture
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio__body">
          <div className="portfolio__guide">
            <p className="portfolio__guide-header">GUIDEBOOK:</p>
            <div className="portfolio__guide-1">
              <p className="portfolio__guide-1-header">[nav] pages:</p>
              <p className="portfolio__guide-1-body">
                [a] home
                <br />
                [b] contact
                <br />
              </p>
            </div>
          </div>
          <div className="portfolio__tech">
            <p className="portfolio__tech-header">SOFTWARE INFRASTRUCTURE:</p>
            <div className="portfolio__tech-1">
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

export default Portfolio;
