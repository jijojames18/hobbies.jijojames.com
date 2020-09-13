import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { ReactComponent as WorkIcon } from "../../assets/work-icon.svg";
import { ReactComponent as SchoolIcon } from "../../assets/school-icon.svg";

const CareerTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="May 2020 - Present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Financial.com</h3>
        <h4 className="vertical-timeline-element-subtitle">Kochi, Kerala</h4>
        <p>Frontend developer</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="June 2015 - April 2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Oracle Corporation</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Trivandrum, Kerala
        </h4>
        <p>Senior Applications Developer</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        date="2011 - 2015"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          B. Tech in Computer Science and Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Sree Chitra Thirunal College of Engineering
        </h4>
      </VerticalTimelineElement>
      ,
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        date="2009 -2011"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">High School</h3>
        <h4 className="vertical-timeline-element-subtitle">
          NSS Public School
        </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        date="2011"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">High School</h3>
        <h4 className="vertical-timeline-element-subtitle">
          NSS Public School
        </h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default CareerTimeline;
