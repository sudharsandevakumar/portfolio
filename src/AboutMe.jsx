import {
  ExtensionRounded,
  Monitor,
  SchoolRounded,
  Storage,
} from "@mui/icons-material";
import React from "react";
import "./AboutMe.css";
function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="aboutme__row1">
        <h1>About Me</h1>
      </div>

      <div className="aboutme__row2">
        <div className="aboutme__row2__top">
          <h2>What I Do</h2>
        </div>
        <div className="aboutme__row__bottom">
          <div className="aboutme__row__bottom__left">
            <div className="aboutme__row__bottom__left__option">
              <div>
                <Monitor />
              </div>
              <div>
                <h4>Design and Develop</h4>
                <p>
                  With 3 years of Experience, I can design any complicated
                  Web-App for your needs that can get your business or idea up
                  and running.
                </p>
              </div>
            </div>

            <div className="aboutme__row__bottom__left__option">
              <div>
                <Storage />
              </div>
              <div>
                <h4>Currently exploring</h4>
                <p>
                  Currently I have been involved in exploring complicated
                  servers, networked infrastructures to get into the field of
                  cyber security.
                </p>
              </div>
            </div>
          </div>

          <div className="aboutme__row__bottom__right">
            <div className="aboutme__row__bottom__right__option">
              <div>
                <SchoolRounded />
              </div>
              <div>
                <h4>Teach and Train</h4>
                <p>
                  When you have a strong goal / mission towards Technology, you
                  cannot go up further without taking your community up to your
                  level. So I also teach people all about designing and
                  developing web-apps that I know from time to time.
                </p>
              </div>
            </div>

            <div className="aboutme__row__bottom__right__option">
              <div>
                <ExtensionRounded />
              </div>
              <div>
                <h4>Hustle</h4>
                <p>
                  There is no one thing. I hustle a lot to explore opportunities
                  and learn various domains of science & technology to apply
                  them in my work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
