import React from "react";
import {Grid, Box} from "@material-ui/core";
import Clerky from "../../Module/Assets/sponsorsLogos/Clerky.png";
import CN from "../../Module/Assets/sponsorsLogos/cn.png";
import Celo from "../../Module/Assets/sponsorsLogos/Celo.png";
import Tezos from "../../Module/Assets/sponsorsLogos/Tezos.png";
import Filecoin from "../../Module/Assets/sponsorsLogos/Filecoin.png";
import Taskade from "../../Module/Assets/sponsorsLogos/taskade.png";
import Axure from "../../Module/Assets/sponsorsLogos/axure.png";
import Stream from "../../Module/Assets/sponsorsLogos/stream.png";
import Devfolio from "../../Module/Assets/sponsorsLogos/Devfolio.png";
import Egg from "../../Module/Assets/sponsorsLogos/egg.png";
import Givemycertificate from "../../Module/Assets/sponsorsLogos/Givemycertificate.png";
import Polygon from "../../Module/Assets/sponsorsLogos/Polygon.png";
import {makeStyles} from "@material-ui/styles";
import Cscoder from "../../Module/Assets/sponsorsLogos/cscoderlogo.png";
import Codermind from "../../Module/Assets/sponsorsLogos/codermind.png";
import Codepartner from "../../Module/Assets/sponsorsLogos/codepartnerlogo.png";
import Learner from "../../Module/Assets/sponsorsLogos/learner.png";


import "./sponsors.scss";

const NewSponsors = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Gold</h1>
        <div className="Sponsor " style={{marginTop: "8rem"}}>
          <a href="https://devfolio.co/" target="_blank">
            <img
              src={Devfolio}
              alt="" //height={100}
            />
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <h1>Silver</h1>
        <Box className="sponsors-logo">
          <div className="Sponsor ">
            <img src={CN} alt="" />
          </div>
          <div className="Sponsor ">
            <img src={Stream} alt="" />
          </div>
          <div className="Sponsor " style={{marginTop: "8rem"}}>
            <img src={Clerky} alt="" height={100} />
          </div>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <h1>Bronze</h1>
        <Box className="sponsors-logo">
          <div className="Sponsor ">
            <a href="https://celo.org/" target="_blank">
              <img src={Celo} alt="" />
            </a>
          </div>
          <div className="Sponsor ">
            <a href="https://filecoin.io/" target="_blank">
              <img src={Filecoin} alt="" />
            </a>
          </div>
          <div className="Sponsor ">
            <a href="https://tezos.com/" target="_blank">
              <img src={Tezos} alt="" />
            </a>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="sponsors-logo">
          <div className="Sponsor ">
            <img src={Egg} alt="" />
          </div>
          <div className="Sponsor ">
            <img src={Taskade} alt="" />
          </div>
          <div className="Sponsor ">
            <a href="https://polygon.technology/" target="_blank">
              <img src={Polygon} alt="" />
            </a>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="sponsors-logo">
          <div className="Sponsor ">
            <a href="https://givemycertificate.com/index.php" target="_blank">
              <img src={Givemycertificate} alt="" />
            </a>
          </div>
          <div className="Sponsor ">
            <img src={Axure} alt="" />
          </div>
          <div className="Sponsor ">
            <a href="https://linktr.ee/leadinglearners" target="_blank">
              <img src={Learner} alt="" />
            </a>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <h1>Community Partner</h1>
        <Box className="sponsors-logo">
          <div className="Sponsor ">
            <a href="https://www.instagram.com/codermind_/" target="_blank">
              <img src={Codermind} alt="" />
            </a>
          </div>
          <div className="Sponsor ">
            <a href="https://www.codepartner.me/" target="_blank">
              <img src={Codepartner} alt="" />
            </a>
          </div>
          <div className="Sponsor ">
            <a href="https://cscodershub.tech/" target="_blank">
              <img src={Cscoder} alt="" />
            </a>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NewSponsors;
