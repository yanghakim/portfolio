import React, { Component } from "react";
import Typing from "react-typing-animation";

import icon from "../../images/favicon.png";

import "../../sass/Greeting.sass";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      fadeoutAnimationClass: "greeting"
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.transition();

      this.setState({
        fadeoutAnimationClass: "greeting fadeout"
      });
    }, 4000);
  }

  render() {
    return (
      <div className={this.state.fadeoutAnimationClass}>
        <div className="greeting__greeting">
          <img src={icon} alt="yangha kim" width="130" height="130" />
          <div className="greeting__greeting-text">
            <Typing>
              <p className="greeting__greeting-name">Yangha Kim</p>
            </Typing>
            <Typing speed={10}>
              <p>
                <br />
                Full-stack developer from Philadelphia.
                <br />I enjoy designing and developing engaging software
                experiences.
              </p>
            </Typing>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
