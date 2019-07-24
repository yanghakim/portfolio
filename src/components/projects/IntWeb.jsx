import React, { Component } from "react";

import "../../sass/Project.sass";

class IntWeb extends Component {
  componentDidMount() {
    this.props.setPage("yanghakim/projects/Intercessor (web)");
  }

  render() {
    return (
      <div className="project">
        <div className="project__back" onClick={() => this.props.shrink(0)}>
          <p className="project__back-text">back</p>
        </div>
        <div className="project__top">
          <div className="project__links">
            <a
              href="https://intercessor-web.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              site{" "}
            </a>
            <a>|</a>
            <a
              href="https://github.com/yanghakim/intercessor"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              code
            </a>
          </div>
          <p className="project__header">INTERCESSOR:</p>
          <div className="project__to">
            <a className="project__to-learned" href="#learned">
              learned
            </a>
            <a className="project__to-colors" href="#colors">
              colors
            </a>
            <a className="project__to-guide" href="#guide">
              guide
            </a>
            <a className="project__to-software" href="#software">
              tech
            </a>
            <a className="project__to-why" href="#why">
              why
            </a>
          </div>
          <p className="project__subheader">
            an environment to send and view prayer requests.
          </p>
        </div>
        <div className="project__learned" id="learned">
          <p className="project__learned-header">
            WHAT I LEARNED [may 2019 - july 2019]:
          </p>
          <div className="project__learned-body">
            <div className="project__learned-1">
              <p className="project__learned-1-header">[I]: Create React App</p>
              <p className="project__learned-1-body">
                - after 2 weeks of learning Javascript, I started my first react
                app
                <br />
                - learned about the utility of components and the virtual DOM
                <br />
                - adopted SASS as a CSS extension
                <br />
                <span className="sm-indent">
                  - learned and utilized sass variables and mixins
                </span>
              </p>
            </div>
            <div className="project__learned-2">
              <p className="project__learned-2-header">
                [II]: Server Side Foundation
              </p>
              <p className="project__learned-2-body">
                - restructuring project to accomodate for server (Node.JS) and
                client (Javascript) side code
                <br />
                - installed and configured Express for route handling
                <br />
                - setup MongoDB
                <br />
                - installed and configured Mongoose for creating models and
                querying
                <br />
                - setup dynamic listening to PORTS (for DEV and PROD)
                <br />
                - installed and configured Passport for authentication
                <br />
              </p>
            </div>
            <div className="project__learned-3">
              <p className="project__learned-3-header">[III]: Routing</p>
              <p className="project__learned-3-body">
                - handle routes with async/await
                <br />
                - CRUD practices
                <br />
                - structuring route files for each collection
                <br />
                - installed Mongoose for creating models and querying
                <br />
                - setup dynamic listening to PORTS (for DEV and PROD)
                <br />
                <span>
                  - routes: login, filter prayers, group members, leave group,
                  and many more
                </span>
              </p>
            </div>
            <div className="project__learned-4">
              <p className="project__learned-4-header">[IV]: Redux</p>
              <p className="project__learned-4-body">
                - configure and connect Redux store with components, mapping
                state to props
                <br />
                - setup actions, action creators, and reducers
                <br />
                - redux thunk used for "functional" action creators
                <br />
                - redux persist used for locally storing states
                <br />
                <span>
                  - states: user data, user's groups, user's favorite groups
                </span>
              </p>
            </div>
            <div className="project__learned-4">
              <p className="project__learned-4-header">[V]: QOL Practices</p>
              <p className="project__learned-4-body">
                - component architecture: breaking down UI by components{" "}
                <span>(login vs register)</span>
                <br />- project architecture: grouping files by functionality{" "}
                <span>(routes vs models)</span> and type{" "}
                <span>(sass vs jsx)</span>
                <br />
                - naming conventions: BEM class naming
                <br />- routing architecture: breaking up big routes into
                middlewares
              </p>
            </div>
          </div>
        </div>

        <div className="project__design" id="design">
          <p className="project__design-header">COLOR CHOICES:</p>
          <div className="project__design-body">
            <p className="project__design-body-colorshadow">
              dark theme: Creates a rather serious atmosphere to contrast with
              the fiery passion invoked by the landing page. This duality
              creates a more holistic experience reflecting the passion of
              Christ and our humble, serious, and hopeful response to it.
            </p>
            <p className="project__design-body-colorpurple">
              purple: Alludes to our royal priesthood as believers of Christ, as
              purple is often associated with royalty. As we intercede for one
              another, we remember what Christ has done for us so that we could
              join together in fighting our spiritual battles.
            </p>
            <p className="project__design-body-colorblue">
              blue/green: Alludes to our freedom in Christ, as blue/green is
              often associated with serenity. As we enter into a time of prayer,
              we remember what Christ has done for us so that we could find
              inner peace in our hearts, minds, and souls.
            </p>
            <p className="project__design-body-colorred">
              red: Alludes to the veil that was torn because of the blood that
              was shed, as red is often associated with blood and sacrifice. As
              we seek help, we remember what Christ has done for us so that we
              could enter the Most Holy Place.
            </p>
          </div>
        </div>

        <div className="project__body">
          <div className="project__guide" id="guide">
            <p className="project__guide-header">GUIDEBOOK:</p>
            <div className="project__guide-0">
              <p className="project__guide-0-header">
                [join] create an account
              </p>
              <p className="project__guide-0-body">
                [1] provide email and password
                <br />
                [2] use Google authentication with Gmail accounts
                <br />
                [3] share your user acronym with others
                <br />
              </p>
            </div>
            <div className="project__guide-1">
              <p className="project__guide-1-header">
                [menu] pick your weapon:
              </p>
              <p className="project__guide-1-body">
                [a] view others' prayer requests
                <br />
                [b] enter a prayer environment
                <br />
                [c] send a prayer request
              </p>
            </div>
            <div className="project__guide-2">
              <p className="project__guide-2-header">
                [a] view others' prayer requests:
              </p>
              <p className="project__guide-2-body">
                [1] selah
                <br />
                [2] prayer feed
                <br />
                [3] prayer detail
                <br />
                <span>[4] sanctuary</span>
              </p>

              <p className="project__guide-2-header">
                [b] enter a prayer environment:
              </p>
              <p className="project__guide-2-body">
                <span>[1] sanctuary</span>
              </p>

              <p className="project__guide-2-header">
                [c] send a prayer request:
              </p>
              <p className="project__guide-2-body">
                [1] selah
                <br />
                [2] prayer request form
                <br />
                <span>[3] sanctuary</span>
              </p>
            </div>
            <div className="project__guide-3">
              <p className="project__guide-3-header">[end] sanctuary:</p>
              <p className="project__guide-3-body">
                [1] set timer OR let the Spirit lead
                <br />
                [2] set prayer topic OR let the Spirit lead
                <br />
                <span>[3] pray</span>
              </p>
            </div>
            <div className="project__guide-4">
              <p className="project__guide-4-header">
                [share] to groups and personally:
              </p>
              <p className="project__guide-4-body">
                [1] create/join groups (found in settings)
                <br />
                [2] share your user acronym with others
                <br />
                [3] share your group acronym with others
                <br />
              </p>
            </div>
          </div>
          <div className="project__tech" id="software">
            <p className="project__tech-header">SOFTWARE INFRASTRUCTURE:</p>
            <div className="project__tech-1">
              <p className="project__tech-1-header">[front-end] Javascript:</p>
              <p className="project__tech-1-body">
                [React.JS] component based app
                <br />
                <span className="indent">
                  [React Router] navigating through components
                  <br />
                </span>
                <br />
                [Redux] state management
                <br />
                <span className="indent">
                  [Redux Thunk] "functional" action creators
                  <br />
                </span>
                <span className="indent">
                  [Redux Persist] persists store using local storage
                  <br />
                </span>
                <br />
                [Axios] make http reqs from Node.js
                <br />
                <br />
                [Bcrypt] encrypt user passwords
                <br />
                <br />
                [Sass] css extension
              </p>
            </div>
            <div className="project__tech-2">
              <p className="project__tech-2-header">[back-end] Node.js:</p>
              <p className="project__tech-2-body">
                [Express] web framework -> route handlers
                <br />
                <br />
                [MongoDB] noSQL database
                <br />
                <span className="indent">
                  [Mongoose] create mongoDB models and querying
                  <br />
                </span>
                <br />
                [Passport] login and register authentication
                <br />
                <span className="indent">
                  [Google OAuth] Google authentication
                  <br />
                </span>
                <br />
                [Cookie-Session] stores session data locally on browser
              </p>
            </div>
          </div>
        </div>
        <div className="project__why" id="why">
          <p className="project__why-header">
            Q: WHY IS THIS FEATURED ON MY PORTFOLIO:
          </p>
          <div className="project__why-body">
            <div className="project__why-1">
              <p className="project__why-1-body">
                A: This is definitely the most impressive thing I've made that I
                can <span>visibly</span> showcase to the world. I use the word{" "}
                <span>visibly</span> because I think most of the work I take
                pride in is internal work - the laying down of the foundation to
                a, hopefully, noble and praiseworthy future.
                <br />
                <br />
                Three years back, when I was a Computer Science student, I
                entertained the idea of creating a mobile prayer sharing app. I
                had already been experimenting with{" "}
                <span>
                  Android Studio, Material UI, and Facebook's Parse (a MBaaS)
                </span>
                . When development and learning seemed to be at their peak,
                Facebook announced that it'd be discontinuing Parse's services,
                which was pretty devastating for me. At that time, I'd also been
                really considering pursuing a service career. These two events
                sparked my transition into pre-medicine.
                <br />
                <br />
                Since then, my discernment of this desire to serve became more
                acute. Eventually it lead me to psychology, and my acute,
                global, and holistic awareness of people's loves evidenced
                itself to be quite unique. Since then, my longing to serve has
                been taking on a more concrete shape. More self-aware, I now
                don't feel the need to rely on a career path to elucidate these
                desires. More and more, I find myself able to satiate these
                longings with and through serving the people close to me.
                <br />
                <br />
                My return to coding started at the very tail end of April 2019
                when I'd moved back to Philadelphia to learn how to live as a
                young adult apart from my parents. This project is a testament
                to all the soul-searching I painfully partook in for the sake of
                my future self. I'm learning faster than I've ever before and my
                eye for good design is better than I've ever remembered. I've
                learned how to create a full-stack application within two months
                and find myself designing good and coherent design in a single
                sitting.
                <br />
                <br />
                I'm grateful to live in a world where information is so
                accessible and skills like coding can be learned just with an
                internet connection. I want to keep working hard and develop
                some cool applications with some cool people.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntWeb;
