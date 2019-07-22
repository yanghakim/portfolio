import React from "react";

import resume from "../../images/Resume.pdf";

import "../../sass/About.sass";

const About = () => {
  return (
    <div className="about">
      <p className="about-title">Current Status:</p>
      <p className="about-title">Current Employment:</p>
      <p className="about-body">
        I'm currently employed at the <b>Institute of Behavior Change</b> as a{" "}
        <i>Therapeutic Staff Support</i>. I work with children on the autism
        spectrum and those who have ADHD. I spent the past 15 months serving the
        community and working with children. My intentions are best articulated
        by this quote from Mahatma Gandhi:
        <i>
          “The best way to find yourself is to lose yourself in the service of
          others."
        </i>
      </p>

      <p className="about-title">Current Goals:</p>
      <p className="about-body">
        I'm active applying to developer positions in Philadelphia. I practice
        code and design for 5 hours on average everyday outside of work. I'm
        currently learning Swift and iOS app development. I am open to enrolling
        in either an advanced, part-time coding or design bootcamp after finding
        employment.
      </p>
      <div className="about-footer">
        <p>contact: yanghakim0@gmail.com</p>
        <a href={resume} download>
          my resume
        </a>
      </div>
    </div>
  );
};

export default About;
