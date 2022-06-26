import React from "react";

import { UL, LI } from "./key-skills.styles";

import { MainHeading } from "./key-skills.styles";

const KeySkills = () => {
  return (
    <React.Fragment>
      <MainHeading>KEY SKILLS</MainHeading>
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

export default KeySkills;
