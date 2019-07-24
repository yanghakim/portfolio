import React, { Component } from "react";

import "../../sass/Project.sass";

class IntApp extends Component {
  componentDidMount() {
    this.props.setPage("yanghakim/projects/Intercessor (mobile)");
  }
  render() {
    return (
      <div className="project">
        <div className="project__back" onClick={() => this.props.shrink(0)}>
          <p className="project__back-text">back</p>
        </div>
        <div className="project__top">
          <div className="project__links">
            <a>in progress</a>
          </div>
          <p className="project__header">INTERCESSOR (mobile app):</p>
          <div className="project__to">
            <a className="project__to-learned" href="#learned">
              todo
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
          <p className="project__learned-header">WHAT I ANTICIPATE LEARNING:</p>
          <div className="project__learned-body">
            <div className="project__learned-1">
              <p className="project__learned-1-header">[I]: Swift</p>
              <p className="project__learned-1-body">
                - currently navigating through Swift documentation
                <br />- following UDEMY course on iOS app development
              </p>
            </div>
            <div className="project__learned-2">
              <p className="project__learned-2-header">
                [II]: Mobile Environments
              </p>
              <p className="project__learned-2-body">
                - learning coding and software standards/practices for mobile
                development
              </p>
            </div>
          </div>
        </div>
        <div className="project__body">
          <div className="project__guide" id="guide">
            <p className="project__guide-header">GUIDEBOOK:</p>
            <div className="project__guide-1">
              <p className="project__guide-1-header">see INTERCESSOR.web:</p>
            </div>
          </div>
          <div className="project__tech" id="software">
            <p className="project__tech-header">SOFTWARE INFRASTRUCTURE:</p>
            <div className="project__tech-1">
              <p className="project__tech-1-header">tbd</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntApp;
