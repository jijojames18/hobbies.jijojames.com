import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import {
  MySkillsContainer,
  MySkillHeadingCol,
  MySkillHeading,
  WordCloudCol,
  WordCloud,
  WordCloudColors,
} from "./my-skills.styles";

import skills from "./skills";

const options = {
  colors: WordCloudColors,
  enableTooltip: false,
  deterministic: false,
  fontFamily: "Kanit",
  fontSizes: [14, 24],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 8,
  rotations: 3,
  rotationAngles: [0, 45],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 2000,
};

const MySkills = () => {
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIteration(iteration + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [iteration]);

  return (
    <MySkillsContainer>
      <Container>
        <Row>
          <MySkillHeadingCol>
            <MySkillHeading>My Skills</MySkillHeading>
          </MySkillHeadingCol>
        </Row>
        <Row>
          <WordCloudCol>
            <WordCloud options={options} words={skills} />
          </WordCloudCol>
        </Row>
      </Container>
    </MySkillsContainer>
  );
};

export default MySkills;
