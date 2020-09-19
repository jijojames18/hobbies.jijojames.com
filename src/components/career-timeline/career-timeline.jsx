import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import {
  CareerContainer,
  HeadingContainer,
  ContentStyle,
  SchoolIconStyle,
  WorkIconStyle,
  ArrowStyle,
  TimelineHeading,
  TimelineSubHeading,
  TimelineContent,
  TimelineContentStyle,
} from "./carrer-timeline.styles";

import { ReactComponent as WorkIcon } from "../../assets/work-icon.svg";
import { ReactComponent as SchoolIcon } from "../../assets/school-icon.svg";

const TimelineData = [
  {
    type: "work",
    date: "May 2020 - Present",
    title: "Financial.com",
    subTitle: "Kochi",
    content:
      "Working as a Front End Developer, developing widgets for data visualization. " +
      "These widgets are intendend to be stand alone and built using Vue, Vuex and Vue-Router along with a number of open source libraries" +
      " such as Ag-Grid and Highcharts.",
  },
  {
    type: "work",
    date: "June 2019 - April 2020",
    title: "Oracle",
    subTitle: "Trivandrum",
    content:
      "Worked as a Senior Applications Developer in Oracle Field Service Cloud. " +
      "Worked on adding new features both on the Front End as well as the Back End side. " +
      "Used a number of technologies including and not limited to JavaScript, Java, Spring Boot " +
      " MySQL, Redis, KafKa, Docker, Kubernetes e.t.c",
  },
  {
    type: "work",
    date: "June 2015 - June 2019",
    title: "Oracle",
    subTitle: "Trivandrum",
    content:
      "Initially worked as an Applications Developer in Oracle Field Service Cloud. " +
      "Worked on adding new features both on the Front End as well as the Back End side. " +
      "Used a number of technologies including and not limited to JavaScript, Java, Spring Boot " +
      " MySQL, Redis, KafKa, Docker, Kubernetes e.t.c",
  },
  {
    type: "education",
    date: "2011 - 2015",
    title: "Graduation",
    subTitle: "Sree Chitra Thirunal College of Engineering",
    content:
      "Completed B.Tech in Computer Science and Engineering from Kerala University.",
  },
  {
    type: "education",
    date: "2009 - 2011",
    title: "NSS Public School",
    subTitle: "12th",
    content:
      "Completed 12th standard, with Major in Computer Science, after writing AISSCE examination conducted by CBSE.",
  },
  {
    type: "education",
    date: "2009",
    title: "NSS Public School",
    subTitle: "10th",
    content:
      "Completed 10th standard after writing AISSE examination conducted by CBSE.",
  },
];

const CareerTimeline = () => {
  return (
    <CareerContainer>
      <HeadingContainer>My Experience</HeadingContainer>
      <VerticalTimeline>
        {TimelineData.map((item, i) => {
          return (
            <VerticalTimelineElement
              key={i}
              className={
                item.type === "work"
                  ? "vertical-timeline-element--work"
                  : "vertical-timeline-element--education"
              }
              contentStyle={ContentStyle}
              contentArrowStyle={ArrowStyle}
              date={item.date}
              iconStyle={item.type === "work" ? WorkIconStyle : SchoolIconStyle}
              icon={item.type === "work" ? <WorkIcon /> : <SchoolIcon />}
            >
              <TimelineHeading className="vertical-timeline-element-title">
                {item.title}
              </TimelineHeading>
              <TimelineSubHeading className="vertical-timeline-element-subtitle">
                {item.subTitle}
              </TimelineSubHeading>
              <TimelineContent style={TimelineContentStyle}>
                {item.content}
              </TimelineContent>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </CareerContainer>
  );
};

export default CareerTimeline;
