import React from "react";
import Card from "react-bootstrap/Card";
import photographyImage from "../../assets/camera-icon.svg";

import { MyHobbiesContainer, CardContainer } from "./my-hobbies.styles";

const MyHobbies = () => {
  return (
    <MyHobbiesContainer>
      <CardContainer style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photographyImage} />
        <Card.Body>
          <Card.Title>Photography</Card.Title>
        </Card.Body>
      </CardContainer>
    </MyHobbiesContainer>
  );
};

export default MyHobbies;
