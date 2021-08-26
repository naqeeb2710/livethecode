import React from "react";
import "./styles.scss";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import HomePage from "../Main-page/HomePage";
// import logo from "./logoo.png"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Discord from "../Routes/Discord";
import Twitter from "../Routes/Twitter";
import Linkedin from "../Routes/LinkedIn";
import Instagram from "../Routes/Instagram";
import Devpost from "../Routes/Devpost";
import {useState, useEffect} from "react";
import Navigation from "../Navigation/Navigation";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Backdrop from "../Navigation/Backdrop/Backdrop";

export default function NAVBAR() {
  const [color, setColor] = useState("#121930");

  const listenScrollEvent = e => {
    if (window.scrollY > 800) {
      setColor("rgba(50, 13, 136)");
    } else {
      setColor("#121930");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  let backdrop;

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <>
      <Navigation
        drawerClickHandler={drawerToggleClickHandler}
        bgcolor={color}
      />
      <SideDrawer show={sideDrawerOpen} click={backdropClickHandler} />;
      {backdrop}
      <Router>
        {/* <nav className="nav_bar" style={{backgroundColor: color}}>
          <ul>
            <li>
              <a href="#home">
                <span className="links">Home </span>{" "}
              </a>
            </li>
            <li>
              <a href="https://forms.gle/CPLwRc1SyvxLZyhNA">
                <span className="links"> Register </span>{" "}
              </a>
            </li>
            <li>
              <a href="#moreinfo">
                <span className="links">More info </span>{" "}
              </a>
            </li>
            <li>
              <a href="#sponsors">
                <span className="links"> Sponsors</span>
              </a>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/discord" exact component={Discord} />
          <Route path="/linkedin" exact component={Linkedin} />
          <Route path="/devpost" exact component={Devpost} />
          <Route path="/twitter" exact component={Twitter} />
          <Route path="/instagram" exact component={Instagram} />
          <Route path="/contact">
            <HomePage />
          </Route>
          <Route path="/links">
            <HomePage />
          </Route>
          <Route path="/projects">
            <HomePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

// function Projects() {
//   return <h2>Projects here</h2>;
// }

// function Contact() {
//   return <h2>contact info</h2>;
// }

// function Links() {
//   return <h2>Home</h2>;
// }
