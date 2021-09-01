import React from "react";
import "./sponsors.scss";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {SOCIALS} from "../../Module/General";

function SponsorsHead() {
  return ( <div><h1 className="shead">Sponsors & Partners</h1>
          </div> );
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="Limbo hacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      {/* <h2>Sponsors are comming soon</h2> */}
      <h3>Interested in Sponsoring </h3>
      <a href={SOCIALS.email}>
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
      </a>{" "}
      {/* <h2> Gold Tier Sponsors </h2> */}
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
