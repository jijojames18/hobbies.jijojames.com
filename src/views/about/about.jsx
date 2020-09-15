import React from "react";
import { AboutContainerComponent } from "../../styles/common.styles";
import CareerTimeline from "../../components/career-timeline/career-timeline";
import AboutMe from "../../components/about-me/about-me";
import MySkills from "../../components/my-skills/my-skills";

const AboutPage = () => {
  return (
    <AboutContainerComponent>
      <AboutMe />
      <CareerTimeline />
      <MySkills />
    </AboutContainerComponent>
  );
};

export default AboutPage;
