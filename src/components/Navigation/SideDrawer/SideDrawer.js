import React from "react";
import "./SideDrawer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faHistory,
  faBriefcase,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const SideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav
      className={`${drawerClasses.join(" ")}`}
    >
      

      <ul>
        <li>
          {/* <FontAwesomeIcon
            icon={faHome}
            className={`home-icons mr-2`}
          />{" "} */}
          <a
            href="#home"
            onClick={props.click}
          >
            <span>Home</span>
          </a>
        </li>
        <li>
          {/* {" "}
          <FontAwesomeIcon
            icon={faUser}
            className={`home-icons mr-3`}
          /> */}
          <a
            href="https://forms.gle/CPLwRc1SyvxLZyhNA"
            onClick={props.click}
          ><span>Register</span>

          </a>
        </li>
        <li>
          {/* {" "}
          <FontAwesomeIcon
            icon={faHistory}
            className={`home-icons mr-3`}
          /> */}
          <a
            href="#moreinfo"
            onClick={props.click}
          >
           <span> More Info</span>
          </a>
        </li>
        <li>
          {/* {" "}
          <FontAwesomeIcon
            icon={faBriefcase}
            className={`home-icons mr-3`}
          /> */}
          <a
            href="#sponsors"
            onClick={props.click}
          >
           <span>Sponsors</span>
          </a>
        </li>
        {/* <li>
          {" "}
          <FontAwesomeIcon
            icon={faIdCard}
            className={`home-icons mr-3 `}
          />
          <a
            href="#contact"
            onClick={props.click}
          >
           spa CONTACT
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default SideDrawer;
