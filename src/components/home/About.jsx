import React from "react";

import resume from "../../images/Resume.pdf";

import "../../sass/About.sass";

const About = () => {
  return (
    <div className="about">
      <p className="about__title">Current Status:</p>

      <div className="about__body">
        <p className="about__body-subtitle">My Vision:</p>
        <p className="about__body-body">
          I'm set on a vision to create useful and engaging applications that
          aid Christians in their walks with God and with others. I'm interested
          in creating unique and interactive experiences that evoke deliberate
          intent from the user. I want to stray users as far away from
          mindlessness and invite them into mindfulness. With every product I
          make, I want to offer something practical but also adventurous and
          engaging.
        </p>

        <p className="about__body-subtitle">Current Goals (updated on 8/7):</p>
        <p className="about__body-body">
          I'm active applying to developer positions in Philadelphia. I am
          writing code, designing, and/or brainstorming for 8 hours on average
          everyday outside of work. For the past two weeks, after I completed my
          "Intercessor" website, I've been brainstorming projects to do next. A
          vision of a CHRISTIAN PERSONAL JOUNRALING service captivated my mind.
          I've reached out to a friend with back-end experience and another with
          design experience to help me flesh out this vision. Already, I am
          learning the importance of communication, patience, and teamwork. I'm
          expectant to learn a lot of hard and soft skills from this project.
        </p>

        <p className="about__body-subtitle">Current Employment:</p>
        <p className="about__body-body">
          I'm currently employed at the <b>Institute of Behavior Change</b> as a{" "}
          <i>Therapeutic Staff Support</i>. I work with children on the autism
          spectrum and those who have ADHD. I spent the past 15 months serving
          the community and working with children. My intentions are best
          articulated by this quote from Mahatma Gandhi:
          <i>
            “The best way to find yourself is to lose yourself in the service of
            others."
          </i>
        </p>

        <div className="about__body-footer">
          <p>contact: yanghakim0@gmail.com</p>
          <a href={resume} download>
            my resume
          </a>
          <p style={{ color: "#394A60", fontSize: "0.8em" }}>
            <br />
            Icon made by Freepik from www.flaticon.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
