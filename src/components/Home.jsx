import React, { Component } from "react";

import Greeting from "./home/Greeting";
import Projects from "./home/Projects";

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
