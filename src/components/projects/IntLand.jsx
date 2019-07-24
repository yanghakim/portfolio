import React, { Component } from "react";

import "../../sass/Project.sass";

class IntLand extends Component {
  componentDidMount() {
    this.props.setPage("yanghakim/projects/Intercessor (landing page)");
  }
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
            <a className="project__to-learned" href="#learned">
              todo
            </a>
            <a className="project__to-colors" href="#design">
              design
            </a>
            <a className="project__to-guide" href="#guide">
              guide
            </a>
            <a className="project__to-software" href="#software">
              tech
            </a>
          </div>
          <p className="project__subheader">
            an environment to send and view prayer requests.
          </p>
        </div>
        <div className="project__learned" id="learned">
          <p className="project__learned-header">WHAT I LEARNED:</p>
          <div className="project__learned-body">
            <div className="project__learned-1">
              <p className="project__learned-1-header">
                [I]: Small Improvements
              </p>
              <p className="project__learned-1-body">
                - considering various different design choices, I came to value
                simplicity and readability above all else, especially above
                creating many features
                <br />- a visitor should be able to quickly read through a
                landing page and also digest the content easily
                <br />- better coding practices, such as BEM naming and
                component architecture
              </p>
            </div>
          </div>
        </div>
        <div className="project__design" id="design">
          <p className="project__design-header">COLOR CHOICES:</p>
          <div className="project__design-body">
            <p className="project__design-body-colorred">
              red: Provokes passion and initiative, as red is often associated
              with energy, courage, and passion. Ties well with the slogan:
              "Join the Fight!"
            </p>
          </div>
        </div>
        <div className="project__body">
          <div className="project__guide" id="guide">
            <p className="project__guide-header">GUIDEBOOK:</p>
            <div className="project__guide-1">
              <p className="project__guide-1-header">[A] It's pretty simple</p>
              <p className="project__guide-1-body">
                It's a landing page for an app that has a section detailing how
                to use the app and one on design choices
              </p>
            </div>
          </div>
          <div className="project__tech" id="software">
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
