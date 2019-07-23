import React, { Component } from "react";

import "../../sass/Project.sass";

class IntLand extends Component {
  render() {
    return (
      <div className="project">
        <div className="project__back" onClick={() => this.props.shrink(0)}>
          <p className="project__back-text">back</p>
        </div>
        <div className="project__top">
          <div className="project__links">
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
          <p className="project__header">INTERCESSOR (landing page):</p>
          <div className="project__to">
            <button className="project__to-learned">todo</button>
            <button className="project__to-guide">guide</button>
            <button className="project__to-software">tech</button>
          </div>
          <p className="project__subheader">
            an environment to send and view prayer requests.
          </p>
        </div>
        <div className="project__learned">
          <p className="project__learned-header">WHAT I LEARNED:</p>
          <div className="project__learned-body">
            <div className="project__learned-1">
              <p className="project__learned-1-header">
                [I]: Small Improvements
              </p>
              <p className="project__learned-1-body">
                - considering various different design choices, I came to value
                simplicity and readability above all else, especially creating
                many features
                <br />- a visitor should be able to quickly read through a
                landing page and also digest the content easily
                <br />- better coding practices, such as BEM naming and
                component architecture
              </p>
            </div>
          </div>
        </div>
        <div className="project__body">
          <div className="project__guide">
            <p className="project__guide-header">GUIDEBOOK:</p>
            <div className="project__guide-1">
              <p className="project__guide-1-header">[A] It's pretty simple</p>
              <p className="project__guide-1-body">
                It's a landing page for an app that has a section detailing how
                to use the app and one on design choices
              </p>
            </div>
          </div>
          <div className="project__tech">
            <p className="project__tech-header">SOFTWARE INFRASTRUCTURE:</p>
            <div className="project__tech-1">
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
      </div>
    );
  }
}

export default IntLand;
