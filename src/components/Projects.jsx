import React, { Component } from "react";
import Typing from "react-typing-animation";

import About from "./home/About";
import IntWeb from "./projects/IntWeb";
import Elysian from "./projects/Elysian";
import IntLand from "./projects/IntLand";
import FourSL from "./projects/FourSL";

import icon from "../images/favicon.png";

import "../sass/Projects.sass";

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      num: 0,
      growFontAnimationClass: "projects__items",
      growContainerAnimationClass: "projects"
    };
  }

  componentDidMount() {
    this.props.setPage("yanghakim/projects");
    this.handleHeaderChange("PROJECTS:");
  }

  grow = num => {
    this.setState({
      growFontAnimationClass: "projects__items grow",
      growContainerAnimationClass: "projects grow",
      num: num
    });

    this.props.expand();

    this.props.setPage("yanghakim/projects");
  };

  shrink = num => {
    this.setState({
      growFontAnimationClass: "projects__items shrink",
      growContainerAnimationClass: "projects shrink",
      num: num,
      header: "PROJECTS:"
    });

    this.props.shrink();

    this.props.setPage("yanghakim/projects");
  };

  handleHeaderChange = page => {
    this.setState({
      header: page
    });
  };

  projectChoice = num => {
    switch (num) {
      case 1:
        return (
          <IntWeb
            shrink={this.shrink}
            setPage={this.props.setPage}
            setHeader={this.handleHeaderChange}
          />
        );
        break;
      case 2:
        return (
          <Elysian
            shrink={this.shrink}
            setPage={this.props.setPage}
            setHeader={this.handleHeaderChange}
          />
        );
        break;
      case 3:
        return (
          <IntLand
            shrink={this.shrink}
            setPage={this.props.setPage}
            setHeader={this.handleHeaderChange}
          />
        );
        break;
      case 4:
        return (
          <FourSL
            shrink={this.shrink}
            setPage={this.props.setPage}
            setHeader={this.handleHeaderChange}
          />
        );
        break;
      case 0:
        return <About />;
        break;
    }
  };

  render() {
    return (
      <div className={this.state.growContainerAnimationClass}>
        <div className={this.state.growFontAnimationClass}>
          <p className="projects__items-header">{this.state.header}</p>
          <div
            className="projects__items__item one"
            onClick={() => this.grow(2)}
          >
            <p className="projects__items__item-header">
              business idea | CURRENT project
            </p>
            <p className="projects__items__item-title">elysian</p>
            <p className="projects__items__item-desc">
              a WEB app for JOURNALING MOMENTS WITH GOD
            </p>
          </div>
          <div
            className="projects__items__item two"
            onClick={() => this.grow(1)}
          >
            <p className="projects__items__item-header">
              july 2019 | FEATURED project
            </p>
            <p className="projects__items__item-title">intercessor.web</p>
            <p className="projects__items__item-desc">
              a WEB app for SHARING PRAYER REQUESTS
            </p>
          </div>

          <div
            className="projects__items__item three"
            onClick={() => this.grow(3)}
          >
            <p className="projects__items__item-header">
              july 2019 | LANDING page
            </p>
            <p className="projects__items__item-title">intercessor.landing</p>
            <p className="projects__items__item-desc">
              a WEB app serving as a LANDING PAGE for Intercessor (app).
            </p>
          </div>
          <div
            className="projects__items__item four"
            onClick={() => this.grow(4)}
          >
            <p className="projects__items__item-header">
              april 2019 | REFERENCE point
            </p>
            <p className="projects__items__item-title">4 spiritual laws</p>
            <p className="projects__items__item-desc">
              a WEB site navigating through the 4 spiritual laws
            </p>
          </div>
        </div>
        <div className="projects__desc">
          {this.projectChoice(this.state.num)}
        </div>
      </div>
    );
  }
}

export default Projects;
