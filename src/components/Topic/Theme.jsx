import React from "react";
import "./theme.scss";

function ThemeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.types}</h1>
    </div>
  );
}

function ThemeList(props) {
  return (
    <div className="Prizes">
      {props.icons}
      <h2>{props.types}</h2>
    </div>
  );
}

export {ThemeList, ThemeHeading};