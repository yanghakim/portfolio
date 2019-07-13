import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../sass/FourSL.sass";

class FourSL extends Component {
  render() {
    return (
      <div className="foursl">
        <Header />
        <div className="foursl__top">
          <div className="foursl__links">
            <a href="https://fslaws.netlify.com/index.html" target="_blank" rel="noopener noreferrer">
              site{" "}
            </a>
            <a>|</a>
            <a
              href="https://github.com/yeggyseo/four-spiritual-laws"
              target="_blank" rel="noopener noreferrer"
            >
              {" "}
              code
            </a>
          </div>
          <p className="foursl__header">FOUR SPIRITUAL LAWS:</p>
          <div className="foursl__to">
            <button className="foursl__to-learned">learned</button>
            <button className="intweb__to-why">why</button>
            <button className="foursl__to-guide">guide</button>
            <button className="foursl__to-software">tech</button>
          </div>
          <p className="foursl__subheader">
            a quick walkthrough of the four spiritual laws.
          </p>
        </div>
        <div className="foursl__learned">
          <p className="foursl__learned-header">WHAT I LEARNED:</p>
          <div className="foursl__learned-body">
            <div className="foursl__learned-1">
              <p className="foursl__learned-1-header">
                [I]: Returning to coding
              </p>
              <p className="foursl__learned-1-body">
                - this was my first attempt back at coding since 2015
                <br />
                - brushed up on HTML and CSS
                <br />
              </p>
            </div>
            <div className="foursl__learned-2">
              <p className="foursl__learned-2-header">
                [II]: Learning new things
              </p>
              <p className="foursl__learned-2-body">
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
        <div className="foursl__why">
          <p className="foursl__why-header">
            Q: WHY IS THIS FEATURED ON MY PORTFOLIO:
          </p>
          <div className="foursl__why-body">
            <div className="foursl__why-1">
              <p className="foursl__why-1-body">
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
        <div className="foursl__body">
          <div className="foursl__guide">
            <p className="foursl__guide-header">GUIDEBOOK:</p>
            <div className="foursl__guide-1">
              <p className="foursl__guide-1-header">[menu] the four laws:</p>
              <p className="foursl__guide-1-body">
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
          <div className="foursl__tech">
            <p className="foursl__tech-header">SOFTWARE INFRASTRUCTURE:</p>
            <div className="foursl__tech-1">
              <p className="foursl__tech-1-header">[front-end] Javascript:</p>
              <p className="foursl__tech-1-body">
                [HTML]
                <br />
                [CSS]
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FourSL;
