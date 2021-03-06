import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import {TOP_SECTION, SOCIALS} from "../../Module/General";

function Btn(props) {
  return (
    <span className="arbaz">
      <button className={props.class}>
        <i className={props.ico}></i>
        {props.type}
        <div className="overlay">
          <div className="overlay-text">{props.overlay}</div>
        </div>
      </button>
    </span>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type="Join our discord"
            overlay="Click the link"
          />
        </a>
      </div>
      <div className="devfolio-btn">
        <div
          className="apply-button "
          data-hackathon-slug="livethecode"
          data-button-theme="light"
           style={{height: "10rem", width: "22rem"}}
        ></div>

        <a href={TOP_SECTION.JUDGES_FORM_LINK} target="_blank">
          {" "}
          <Btn class="register" type="Registration Guide" overlay="Watch Video" />
        </a>
      </div>
    </div>
  );
}

export {Btn, Myinfo};
