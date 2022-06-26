import React from "react";

import { HomeContainerComponent } from "../../styles/common.styles";
import AboutMe from "../../components/about-me/about-me";

const AboutPage = () => {
  return (
    <HomeContainerComponent>
      <AboutMe />
    </HomeContainerComponent>
  );
};

export default AboutPage;
