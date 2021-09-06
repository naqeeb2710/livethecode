import React from "react";
import {Grid, Box} from "@material-ui/core";
import Clerky from "../../Module/Assets/sponsorsLogos/Clerky.png";
import CN from "../../Module/Assets/sponsorsLogos/cn.png";
import Taskade from "../../Module/Assets/sponsorsLogos/taskade.png";
import Stream from "../../Module/Assets/sponsorsLogos/stream.png";
import Egg from "../../Module/Assets/sponsorsLogos/egg.png";
import {makeStyles} from "@material-ui/styles";
// import Egg from "../../Module/Assets/sponsorsLogos/egg.png";
import "./sponsors.scss";

const NewSponsors = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Gold</h1>
        <div className="Sponsor " style={{marginTop: "8rem"}}>
          <img src={Clerky} alt="" height={100} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <h1>Silver</h1>
        <Box style={{display: "flex", justifyContent: "center"}}>
          <div className="Sponsor ">
            <a href="#">
              <img src={CN} alt="" />
            </a>
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
      </Grid>
    </Grid>
  );
};

export default NewSponsors;
