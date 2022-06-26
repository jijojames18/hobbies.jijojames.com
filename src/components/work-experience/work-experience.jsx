import React from "react";
import { MainHeading, UL, LI } from "./work-experience.styles";

const WorkExperience = () => {
  return (
    <React.Fragment>
      <MainHeading>Key Skills</MainHeading>
      <UL>
        <LI> JavaScript </LI>
        <LI> Vue</LI>
        <LI> HTML 5</LI>
        <LI> CSS 3</LI>
        <LI> SASS</LI>
        <LI> TypeScript</LI>
        <LI> Webpack</LI>
        <LI> Docker</LI>
        <LI> Redis</LI>
        <LI> Java (Basics)</LI>
        <LI> MySQL</LI>
        <LI> Kubernetes</LI>
      </UL>
    </React.Fragment>
  );
};

export default WorkExperience;
