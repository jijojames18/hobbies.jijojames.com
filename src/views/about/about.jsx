import React from "react";
import { AboutContainerComponent } from "../../styles/common.styles";
import CareerTimeline from "../../components/career-timeline/career-timeline";
import AboutMe from "../../components/about-me/about-me";

const AboutPage = () => {
  return (
    <AboutContainerComponent>
      <AboutMe />
      <CareerTimeline />
    </AboutContainerComponent>
  );
};

export default AboutPage;
