import React, { Component } from "react";

import icon from "../../images/ataraxia/favicon.png";

import "../../sass/Project.sass";

class Ataraxia extends Component {
  componentDidMount() {
    this.props.setPage("yanghakim/projects/Ataraxia");
  }
  render() {
    const images = require.context("../../images/ataraxia", true);
    const imagePath = name => images(name, true);

    return (
      <div className="project">
        <div className="project__nav">
          <p className="project__nav-back" onClick={() => this.props.shrink(0)}>
            back
          </p>

          <div className="project__nav-links">
            <a
              href="https://ataraxia.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              site{" "}
            </a>
            <a>|</a>
            <a
              href="https://github.com/yanghakim/Ataraxia"
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
            <p>ATARAXIA:</p>
          </div>
          <p className="project__top__subheader">
            a journey through human personality that might better equip
            Christians
          </p>
        </div>

        <div className="project__images">
          <p className="project__images-header">PREVIEWS:</p>
          <figure>
            <img
              src={imagePath("./login.png")}
              alt="login"
              className="project__images-item"
            />
            <figcaption>Fig.1 - Login Screen.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./definition.png")}
              alt="definition"
              className="project__images-item"
            />
            <figcaption>Fig.2 - Definition Screen.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./prompt.png")}
              alt="prompt"
              className="project__images-item"
            />
            <figcaption>Fig.3 - Prompt Screen.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./preview.png")}
              alt="preview"
              className="project__images-item"
            />
            <figcaption>Fig.4 - Preview Screen.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./ennealine.png")}
              alt="ennealine"
              className="project__images-item"
            />
            <figcaption>Fig.5 - Enneagram Type Screen.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./enneatri.png")}
              alt="enneatri"
              className="project__images-item"
            />
            <figcaption>Fig.6 - Enneagram TriType Screen.</figcaption>
          </figure>
        </div>

        <div className="project__learned" id="learned">
          <p className="project__learned-header">WHAT I ANTICIPATE LEARNING:</p>
          <div className="project__learned-body">
            <div className="project__learned-1">
              <p className="project__learned-1-header">[I]: Angular</p>
              <p className="project__learned-1-body">
                - learning Angular architecture and best structuring practices
                <br />
                - Angular CLI commands
                <br />- How Angular compares to React
                <br />- TypeScript
              </p>
            </div>
            <div className="project__learned-2">
              <p className="project__learned-2-header">[II]: Enjoyment</p>
              <p className="project__learned-2-body">
                - personal enjoyment of exploring human personality
                <br />- creating an interactive and flashy design
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ataraxia;
