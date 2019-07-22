import React, { Component } from "react";

import "../../sass/Footer.sass";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer__credits">
          Icon made by Freepik from www.flaticon.com
        </p>
        <p className="footer__contact">contact: yanghakim0@gmail.com</p>
      </div>
    );
  }
}

export default Footer;
