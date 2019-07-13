import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";

import "../sass/Contact.sass";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangeMessage = e => {
    this.setState({
      message: e.target.value
    });
    console.log(__dirname, __filename);
  };

  sendEmail = async () => {
    // Grab state
    let { name, email, message } = this.state;

    let form = await axios.post("/api/contact", {
      name,
      email,
      message
    });

    console.log(form);
  };

  render() {
    return (
      <div className="contact">
        <Header />
        <p className="contact__header">contact form:</p>
        <form className="contact__form">
          <input
            className="contact__form-fill"
            type="text"
            placeholder="name"
            onChange={this.onChangeName}
          />
          <input
            className="contact__form-fill"
            type="text"
            placeholder="email"
            onChange={this.onChangeEmail}
          />
          <textarea
            className="contact__form-textarea"
            placeholder="message"
            onChange={this.onChangeMessage}
          />
          <button className="contact__form-submit" onClick={this.sendEmail}>
            submit
          </button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Contact;
