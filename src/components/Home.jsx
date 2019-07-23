import React, { Component } from "react";
import Typing from "react-typing-animation";

import Greeting from "./home/Greeting";
import Projects from "./Projects";

import icon from "../images/favicon.png";

import "../sass/Home.sass";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      borderAnimationClass: "home",
      projects: false
    };
  }

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
              <Typing>
                Yangha Kim
                <br />
                Based in Philly
              </Typing>
            </p>
          </div>
        )}

        <div className={this.state.borderAnimationClass}>
          {!this.state.projects && <Greeting transition={this.border} />}
          {this.state.projects && (
            <Projects expand={this.expand} shrink={this.shrink} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
