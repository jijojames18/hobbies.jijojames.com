import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import CustomButton from "../custom-button/custom-button";

import "./projects-radio-button.scss";

const ProjectsRadioButton = () => {
  const buttons = ["All", "Front End", "Back End", "Libraries"];

  const [clickedButton, setClickedButton] = useState(0);

  const onButtonClicked = (event) => {
    const clickedButton = Number(event.target.name.split("_")[1]);
    setClickedButton(clickedButton);
  };

  return (
    <Row>
      <Col sm={12} md={6} lg={4}>
        <ButtonGroup
          size="lg"
          className="mb-2"
          bsPrefix="projects-button-group"
        >
          {buttons.map((buttonLabel, i) => (
            <CustomButton
              key={i}
              name={"button_" + i}
              className={clickedButton === i ? "selected" : ""}
              onClick={onButtonClicked}
            >
              {buttonLabel}
            </CustomButton>
          ))}
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default ProjectsRadioButton;
