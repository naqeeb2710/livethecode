import React from "react";
import "./Navigation.css";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
const Navigation = props => {
  return (
    // <header className={`toolbar`}>
    <nav
      className="toolbar__navigation"
      style={{backgroundColor: props.bgcolor}}
    >
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="#home">
          <span>Live The Code</span>
        </a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        {/* <ul className="activelinks"> */}
        {/* <li className="actives"> */}
        <ul>
          <li className="actives">
            <a href="#home">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="https://forms.gle/CPLwRc1SyvxLZyhNA">Register</a>
          </li>
          <li>
            <a href="#moreinfo">More Info</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          {/* <li>
            <a href="#contact">CONTACT</a>
          </li> */}
        </ul>
      </div>
    </nav>
    // </header>
  );
};

export default Navigation;
