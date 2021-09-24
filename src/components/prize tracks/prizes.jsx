import React from "react";
import "./prizes.scss";

function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className="Prizes">
      {props.icon}
      <h2>{props.type}</h2>
      <a href={props.learnmore} target="_blank">
        <span>T&C</span>
        <i class="fas fa-link"></i>
      </a>
      <p>{props.content}</p>
    </div>
  );
}

export {FirstPrize, PrizeHeading};
