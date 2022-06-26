import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import CustomButton from "../custom-button/custom-button";
import { getProjectSelectedListOption } from "../../redux/projects/projects.selectors";
import { changeSelectedProjectListOption } from "../../redux/projects/projects.actions";

import "./projects-radio-button.scss";

const ProjectsRadioButton = ({
  selectedOption,
  changeSelectedProjectListOption,
}) => {
  const buttons = ["All", "Front End", "Back End", "Libraries"];

  const onButtonClicked = (event) => {
    const clickedButton = Number(event.target.name.split("_")[1]);
    changeSelectedProjectListOption({ option: clickedButton });
  };

  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <ButtonGroup
          size="lg"
          className="mb-2"
          bsPrefix="projects-button-group"
        >
          {buttons.map((buttonLabel, i) => (
            <CustomButton
              key={i}
              name={"button_" + i}
              className={selectedOption === i ? "selected" : ""}
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

const mapStateToProps = createStructuredSelector({
  selectedOption: getProjectSelectedListOption,
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedProjectListOption: (payload) =>
    dispatch(changeSelectedProjectListOption(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsRadioButton);
