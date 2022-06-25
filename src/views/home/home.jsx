import React from "react";
import { AboutContainerComponent } from "../../styles/common.styles";
import AboutMe from "../../components/about-me/about-me";

const AboutPage = () => {
  return (
    <AboutContainerComponent>
      <AboutMe />
    </AboutContainerComponent>
  );
};

export default AboutPage;
