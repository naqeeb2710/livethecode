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
        iconStyle={{background: "rgb(16, 204, 82)", color: "#fff"}} 
      >
        <h3 className="vertical-timeline-element-title">Registration Start</h3>
        <h4 className="vertical-timeline-element-subtitle">8-26 Septmber 2021</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
      >
       <h3 className="vertical-timeline-element-title">Orientation</h3>
        <h4 className="vertical-timeline-element-subtitle">
         20 September 2021
        </h4>
        <a href="https://youtu.be/72BzTGiGY8g" target="_blank">
        <i class="fa-2x fas fa-play">Watch Here</i>
        </a>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        >
       
       <h3 className="vertical-timeline-element-title">Workshop By Praveen Kumar </h3>
        <h4 className="vertical-timeline-element-subtitle">Career Devlopment, Studying And Working in U.K</h4>
        <h4 className="vertical-timeline-element-subtitle">5:00 PM IST 22 September 2021</h4>
        <a href="https://youtu.be/EWLnGtcM_48" target="_blank">
        <i class="fa-2x fas fa-play">Watch Here</i>
        </a>
        
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
        >
        <h3 className="vertical-timeline-element-title">Workshop By Coding Ninja</h3>
        <h4 className="vertical-timeline-element-subtitle">Future of Career Transition in ML/AI</h4>
        <h4 className="vertical-timeline-element-subtitle">6 PM IST 26 September 2021</h4>
        <a href="https://www.youtube.com/watch?v=KU2v48n0e9w" target="_blank">
        <i class="fa-2x fas fa-play">Watch Here</i>
        </a>
      </VerticalTimelineElement>
      
      
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
      >
        <h3 className="vertical-timeline-element-title">Workshop By Devfolio </h3>
        <h4 className="vertical-timeline-element-subtitle">
         27/28 September 2021
        </h4>
        <a href="#home">
        <i class="fa-2x fas fa-play">Watch Here</i>
        </a>
      </VerticalTimelineElement> */}
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
      >
        <h3 className="vertical-timeline-element-title">Workshop By MyFirstXP</h3>
        <h4 className="vertical-timeline-element-subtitle">How to grab Internship with MyFirstXP</h4>
        <h4 className="vertical-timeline-element-subtitle">5:00 PM IST 29 September 2021</h4>
         <a href="https://www.youtube.com/watch?v=TN3GxJ0HlbI" target="_blank">
        <i class="fa-2x fas fa-play">Watch Here</i>
        </a>

      </VerticalTimelineElement> */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
      >
        <h3 className="vertical-timeline-element-title">Workshop By SAWO</h3>
        <h4 className="vertical-timeline-element-subtitle">SAWO-API Integration-Win SAWO Prizes In Hackathon</h4>
        <h4 className="vertical-timeline-element-subtitle">5 PM IST 1 October 2021 </h4>
        <a href="https://www.youtube.com/watch?v=Wd--sIKYkPk" target="_blank">
        <i class="fa-2x fas fa-play">Watch Here</i>
         </a>
        
      </VerticalTimelineElement> 
       <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
      >
        <h3 className="vertical-timeline-element-title">Workshop By Coil</h3>
        <h4 className="vertical-timeline-element-subtitle">Coil-API Integration-Win Coil Prizes In Hackathon</h4>
        <h4 className="vertical-timeline-element-subtitle">8:30 PM IST 1 October 2021 </h4>
        <a href="https://www.youtube.com/watch?v=Iuqtkt0Hf-0" target="_blank">
        <i class="fa-2x fas fa-play">Watch Here</i>
         </a>
        
      </VerticalTimelineElement> 
      
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
      >
        <h3 className="vertical-timeline-element-title">
        Idea Presentation
          </h3>
        <h4 className="vertical-timeline-element-subtitle">3-4 October 2021</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
      >
        <h3 className="vertical-timeline-element-title">
          Idea Implementation Phase
        </h3>
        <h4 className="vertical-timeline-element-subtitle">5-9 October 2021</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
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
      >
      <h3 className="vertical-timeline-element-title">
        Final Round
        </h3>
        <h4 className="vertical-timeline-element-subtitle">10 October 2021</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

