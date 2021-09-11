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
        iconStyle={{background: "rgb(255, 0, 0)", color: "#fff"}}
      >
        <h3 className="vertical-timeline-element-title">Registration Start</h3>
        <h4 className="vertical-timeline-element-subtitle">8-24 Septmber</h4>
        <p>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date=""
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Orientation</h3>
        <h4 className="vertical-timeline-element-subtitle">
         20 September
        </h4>
        <p>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // date="2008 - 2010"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Workshop 1</h3>
        <h4 className="vertical-timeline-element-subtitle">26 September</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date=""
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Workshop 2</h3>
        <h4 className="vertical-timeline-element-subtitle">
         27/28 September
        </h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Idea Presentation
          </h3>
        <h4 className="vertical-timeline-element-subtitle">3-4 October</h4>
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
        <h4 className="vertical-timeline-element-subtitle">5-9 October</h4>
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
        <h4 className="vertical-timeline-element-subtitle">7-9 October</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{background: "rgb(16, 204, 82)", color: "#fff"}}
        // icon={<StarIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Final Round
        </h3>
        <h4 className="vertical-timeline-element-subtitle">10 October</h4>
        <p></p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
