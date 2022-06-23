import React from "react";
import "./Intro.css";
import Sandyy from "./images/Sandyy.jpg";
function Intro() {
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__left">
          <div className="intro__left__1">
            <p>Tech Enthusiast ! :)</p>
          </div>
          <div className="intro__left__2">
            <h1>
              Sudharsan <br /> Devakumar
            </h1>
          </div>
          <div className="intro__left__3">
            <p>
              Started programming at the age of 18, I got a keen interest
              towards Web Technology and have explored multiple dimensions of
              it. While stepping in the 2nd yr on my college, I took the road of
              freelancing and progressively worked with multiple projects in
              Web-Tech which gave me a brief exposure towards the industry. You
              can contact me for a coffee or to get your idea into code or to
              consult for your software, security or hardware needs.
            </p>
          </div>

          <div className="intro__left__4">
            <div className="intro__left__4btn">
              <a href="#certificates">Know More</a>
            </div>

            <div className="intro__left__4btn">
              <a href="#footer">Contact</a>
            </div>
          </div>
        </div>
        <div className="intro__right">
          <img className="intro__right__dp" src={Sandyy} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
