import React, { Component } from "react";

import Greeting from "./home/Greeting";
import Projects from "./Projects";

import icon from "../images/birdpurp.png";

import "../sass/Home.sass";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      borderAnimationClass: "home",
      projects: false,
      page: "yanghakim"
    };
  }

  setPage = page => {
    this.setState({
      page
    });
  };

  border = () => {
    this.setState(
      {
        borderAnimationClass: "home border"
      },
      () => {
        setTimeout(() => {
          this.setState({
            projects: true
          });
        }, 1000);
      }
    );
  };

  expand = () => {
    this.setState({
      borderAnimationClass: "home border expand"
    });
  };

  shrink = () => {
    this.setState({
      borderAnimationClass: "home border shrink"
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.projects && (
          <div className="container__greeting">
            <img src={icon} alt="yangha kim" width="50" height="50" />

            <p className="container__greeting-text">
              Yangha Kim
              <br />
              Based in Philly
            </p>
          </div>
        )}

        <div className={this.state.borderAnimationClass}>
          {!this.state.projects && <Greeting transition={this.border} />}
          {this.state.projects && (
            <Projects
              expand={this.expand}
              shrink={this.shrink}
              setPage={this.setPage}
            />
          )}
        </div>
        <p className="page">{this.state.page}</p>
      </div>
    );
  }
}

export default Home;
