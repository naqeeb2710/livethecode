import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
        date=""
        iconStyle={{background: "rgb(16, 204, 82)", color: "#fff"}}
       
      >
        <h3 className="vertical-timeline-element-title">Registration Start</h3>
        <h4 className="vertical-timeline-element-subtitle">8-24 Septmber 2021</h4>
        <p>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date=""
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<WorkIcon />}
      >
       <a href="https://youtu.be/72BzTGiGY8g" target="_blank">
        <h3 className="vertical-timeline-element-title">Orientation</h3>
        <h4 className="vertical-timeline-element-subtitle">
         20 September 2021
        </h4>
        </a>
        <p>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2008 - 2010"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<WorkIcon />}
      >
       <a href="https://youtu.be/EWLnGtcM_48" target="_blank"> 
       <h3 className="vertical-timeline-element-title">Workshop By Praveen Kumar </h3>
        <h4 className="vertical-timeline-element-subtitle">Carrier Devlopment, Studying And Working in U.K</h4>
        <h4 className="vertical-timeline-element-subtitle">22 September 2021</h4>
        </a>
        <p> </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2008 - 2010"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Workshop By Coding Ninja</h3>
        <h4 className="vertical-timeline-element-subtitle">Introduction To A.I And M.L</h4>
        <h4 className="vertical-timeline-element-subtitle">26 September 2021</h4>
        {/* <p>Introduction To A.I And M.L</p> */}
      </VerticalTimelineElement>
      
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date=""
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Workshop By Devfolio </h3>
        <h4 className="vertical-timeline-element-subtitle">
         27/28 September 2021
        </h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2008 - 2010"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Workshop By MyFirstXP</h3>
        <h4 className="vertical-timeline-element-subtitle">How to get Internship</h4>
        <h4 className="vertical-timeline-element-subtitle">29 September 2021</h4>
        <p></p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2008 - 2010"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Workshop 5</h3>
        <h4 className="vertical-timeline-element-subtitle">Coil - Web Monetization API</h4>
        <h4 className="vertical-timeline-element-subtitle">30 September 2021</h4>
        <p></p>
      </VerticalTimelineElement> */}
      
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Idea Presentation
          </h3>
        <h4 className="vertical-timeline-element-subtitle">3-4 October 2021</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
       
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Idea Implementation Phase
        </h3>
        <h4 className="vertical-timeline-element-subtitle">5-9 October 2021</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
         Project Submission
        </h3>
        <h4 className="vertical-timeline-element-subtitle">7-9 October 2021</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{background: "rgb(255, 0, 0)", color: "#fff"}}
        // icon={<StarIcon />}
      >
      <h3 className="vertical-timeline-element-title">
        Final Round
        </h3>
        <h4 className="vertical-timeline-element-subtitle">10 October 2021</h4>
        <p></p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

