import React, { Component } from "react";

import "../sass/Footer.sass";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__left">
          <a href="https://intercessor-web.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            intercessor
          </a>
          <a href="https://fslaws.netlify.com/index.html" target="_blank" rel="noopener noreferrer">
            4 spiritual laws
          </a>
          <a href="https://github.com/yanghakim" target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
        <p className="footer__contact">contact: yanghakim0@gmail.com</p>
      </div>
    );
  }
}

export default Footer;
