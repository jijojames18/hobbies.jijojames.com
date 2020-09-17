import React from "react";
import Card from "react-bootstrap/Card";
import cameraImage from "../../assets/camera-icon.svg";
import blogImage from "../../assets/blog-icon.svg";
import readingImage from "../../assets/reading-icon.svg";
import footballImage from "../../assets/football-icon.svg";
import vlogImage from "../../assets/vlog-icon.svg";

import { MyHobbiesContainer, CardContainer } from "./my-hobbies.styles";

const MyHobbies = () => {
  return (
    <MyHobbiesContainer>
      <CardContainer>
        <Card.Img variant="top" src={cameraImage} />
        <Card.Body>
          <Card.Title>Photography</Card.Title>
        </Card.Body>
      </CardContainer>
      <CardContainer>
        <Card.Img variant="top" src={blogImage} />
        <Card.Body>
          <Card.Title>Blogging</Card.Title>
        </Card.Body>
      </CardContainer>
      <CardContainer>
        <Card.Img variant="top" src={readingImage} />
        <Card.Body>
          <Card.Title>Reading</Card.Title>
        </Card.Body>
      </CardContainer>
      <CardContainer>
        <Card.Img variant="top" src={footballImage} />
        <Card.Body>
          <Card.Title>Football</Card.Title>
        </Card.Body>
      </CardContainer>
      <CardContainer>
        <Card.Img variant="top" src={vlogImage} />
        <Card.Body>
          <Card.Title>Vlogging</Card.Title>
        </Card.Body>
      </CardContainer>
    </MyHobbiesContainer>
  );
};

export default MyHobbies;
