import React, { Component } from "react";

import icon from "../../images/elysian/favicon.png";

import "../../sass/Project.sass";

class Elysian extends Component {
  componentDidMount() {
    this.props.setPage("yanghakim/projects/Elysian");
  }
  render() {
    const images = require.context("../../images/elysian", true);
    const imagePath = name => images(name, true);

    return (
      <div className="project">
        <div className="project__nav">
          <p className="project__nav-back" onClick={() => this.props.shrink(0)}>
            back
          </p>

          <div className="project__nav-links">
            <a
              href="https://elysian-dev.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              site{" "}
            </a>
            <a>|</a>
            <a
              href="https://github.com/yanghakim/Elysian"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              code
            </a>
          </div>
        </div>
        <div className="project__top">
          <div className="project__top__header">
            <img src={icon} width="30" height="30" />
            <p>ELYSIAN:</p>
          </div>
          <p className="project__top__subheader">
            an environment to journal your walk with the Lord
            <br />a subscription service that compiles, packages, and delivers
            user's entries in a physical journal
          </p>
        </div>

        <div className="project__images">
          <p className="project__images-header">PREVIEWS:</p>
          <figure>
            <img
              src={imagePath("./login.jpg")}
              alt="login"
              className="project__images-item"
            />
            <figcaption>Fig.1 - Login Screen.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./menu.jpg")}
              alt="menu"
              className="project__images-item"
            />
            <figcaption>Fig.2 - Menu Screen.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./home.jpg")}
              alt="notes"
              className="project__images-item"
            />
            <figcaption>Fig.3 - Note Taking Screen.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./settings.jpg")}
              alt="settings"
              className="project__images-item"
            />
            <figcaption>Fig.4 - Settings Screen.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./checkout.jpg")}
              alt="purchase"
              className="project__images-item"
            />
            <figcaption>Fig.5 - Purchase Screen.</figcaption>
          </figure>
        </div>

        <div className="project__learned" id="learned">
          <p className="project__learned-header">WHAT I ANTICIPATE LEARNING:</p>
          <div className="project__learned-body">
            <div className="project__learned-1">
              <p className="project__learned-1-header">[I]: Manangement</p>
              <p className="project__learned-1-body">
                - hand picking candidates to join the team and delegating tasks
                <br />- communicating my vision and making reminders of goals
                <br />- pushing the project forwards at standstills
              </p>
            </div>
            <div className="project__learned-2">
              <p className="project__learned-2-header">[II]: Front-End Focus</p>
              <p className="project__learned-2-body">
                - tasked with front-end programming
                <br />- learning better UI/UX practices
                <br />- communicating with designer and back-end developer
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Elysian;
