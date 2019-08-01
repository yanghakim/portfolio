import React, { Component } from "react";

import "../../sass/Project.sass";

class FourSL extends Component {
  componentDidMount() {
    this.props.setPage("yanghakim/projects/Four Spiritual Laws");
    this.props.setHeader("FOUR SPIRITUAL LAWS:");
  }

  render() {
    const images = require.context("../../images/fsl", true);
    const imagePath = name => images(name, true);

    return (
      <div className="project">
        <div className="project__nav">
          <p className="project__nav-back" onClick={() => this.props.shrink(0)}>
            back
          </p>

          <div className="project__nav-links">
            <a
              href="https://fslaws.netlify.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              site{" "}
            </a>
            <a>|</a>
            <a
              href="https://github.com/yeggyseo/four-spiritual-laws"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              code
            </a>
          </div>
        </div>
        <div className="project__top">
          <p className="project__top__header">FOUR SPIRITUAL LAWS:</p>
          <div className="project__top__to">
            <button className="project__top__to-learned">learned</button>
            <button className="project__top__to-why">why</button>
            <button className="project__top__to-guide">guide</button>
            <button className="project__top__to-software">tech</button>
          </div>
          <p className="project__top__subheader">
            a quick walkthrough of the four spiritual laws.
          </p>
        </div>

        <div className="project__images">
          <p className="project__images-header">PREVIEWS:</p>{" "}
          <figure>
            <img
              src={imagePath("./home.jpg")}
              alt="home"
              className="project__images-item"
            />
            <figcaption>Fig.1 - Home Screen - Click to Proceed.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./green.jpg")}
              alt="love"
              className="project__images-item"
            />
            <figcaption>Fig.2 - 1st Law.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./grey.jpg")}
              alt="sin"
              className="project__images-item"
            />
            <figcaption>Fig.3 - 2nd Law.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./red.jpg")}
              alt="Christ"
              className="project__images-item"
            />
            <figcaption>Fig.4 - 3rd Law.</figcaption>
          </figure>
          <figure>
            <img
              src={imagePath("./yellow.jpg")}
              alt="faith"
              className="project__images-item"
            />
            <figcaption>Fig.5 - 4th Law.</figcaption>
          </figure>
        </div>

        <div className="project__learned">
          <p className="project__learned-header">WHAT I LEARNED:</p>
          <div className="project__learned-body">
            <div className="project__learned-1">
              <p className="project__learned-1-header">
                [I]: Returning to coding
              </p>
              <p className="project__learned-1-body">
                - this was my first attempt back at coding since 2015
                <br />
                - brushed up on HTML and CSS
                <br />
              </p>
            </div>
            <div className="project__learned-2">
              <p className="project__learned-2-header">
                [II]: Learning new things
              </p>
              <p className="project__learned-2-body">
                - learned git
                <br />
                - learned command line prompts for git and directory navigation
                <br />
                - learned Javascript for the first time
                <br />
                - importing Google Fonts
                <br />
                - keyframes, transform, and animations
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="project__design" id="design">
          <p className="project__design-header">COLOR CHOICES:</p>
          <div className="project__design-body">
            <p className="project__design-body-colorgreen">
              green: Symbolizes life and flourishing, as the first spiritual law
              is that God loves you and offers a wonderful plan for your life.
            </p>
            <p className="project__design-body-colorshadow">
              black: Symbolizes darkness and despair, as the second spiritual
              law is that man is sinful and separated from God. Therefore, he
              cannot know and experience God's love and plan for his life.
            </p>
            <p className="project__design-body-colorred">
              red: Symbolizes passion, blood, and sacrifice, as the third
              spiritual law is that Jesus Christ is God's only provision for
              man's sin. Through Him you can know and experience God's love and
              plan for your life.
            </p>
            <p className="project__design-body-coloryellow">
              gold: Symbolizes hope and prosperity, as the fourth spiritual law
              is that we must individually receive Jesus Christ as Savior and
              Lord; then we can know and experience God's love and plan for our
              lives.
            </p>
          </div>
        </div>

        <div className="project__body">
          <div className="project__guide">
            <p className="project__guide-header">GUIDEBOOK:</p>
            <div className="project__guide-1">
              <p className="project__guide-1-header">[menu] the four laws:</p>
              <p className="project__guide-1-body">
                [1] Love
                <br />
                [2] Sin
                <br />
                [3] Christ
                <br />
                [4] Faith
              </p>
            </div>
          </div>
          <div className="project__tech">
            <p className="project__tech-header">SOFTWARE INFRASTRUCTURE:</p>
            <div className="project__tech-1">
              <p className="project__tech-1-header">[front-end] Javascript:</p>
              <p className="project__tech-1-body">
                [HTML]
                <br />
                [CSS]
              </p>
            </div>
          </div>
        </div>
        <div className="project__why">
          <p className="project__why-header">
            Q: WHY IS THIS FEATURED ON MY PORTFOLIO:
          </p>
          <div className="project__why-body">
            <div className="project__why-1">
              <p className="project__why-1-body">
                A: This is definitely not the most impressive thing I've made -
                but it was quite awe-strucking during development. I think a few
                days after deciding to studying coding again, I quickly went to
                work at designing a website. Though I had not touched any code
                since 2016, a lot of concepts, old and new, came quickly to me.
                <br />
                <br />I remember being thoroughly entertained and impressed by
                the final result of this mini-project. Within a week, I brushed
                up on HTML and CSS, learned Javascript and deployed the site via
                Netlify. This project is mainly a reference point to compare my
                current work with. Within 2 months, I'd be done designing and
                programming a full-stack application using React, Node.JS,
                Redux, Express, MongoDB, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourSL;
