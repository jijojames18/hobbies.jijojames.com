import React from "react";
import Row from "react-bootstrap/Row";

import FlipCard from "../flip-card/flip-card";

import {
  MyHobbiesContainer,
  MyHobbiesHeadingCol,
  MyHobbiesHeading,
  FlipCardPhotographyImg,
  FlipCardBlogImg,
  FlipCardReadingImg,
  FlipCardVlogImg,
  MyHobbiesContentCol,
  FlipCardFootballImg,
} from "./my-hobbies.styles";

const Hobbies = [
  {
    img: FlipCardPhotographyImg,
    title: "Photography",
  },
  {
    img: FlipCardBlogImg,
    title: "Blogging",
  },
  {
    img: FlipCardVlogImg,
    title: "Vlogging",
  },
  {
    img: FlipCardReadingImg,
    title: "Reading",
  },
  {
    img: FlipCardFootballImg,
    title: "Football",
  },
];

const MyHobbies = () => {
  return (
    <MyHobbiesContainer fluid>
      <Row>
        <MyHobbiesHeadingCol>
          <MyHobbiesHeading>My Hobbies</MyHobbiesHeading>
        </MyHobbiesHeadingCol>
      </Row>
      <Row>
        <MyHobbiesContentCol>
          {Hobbies.map((hobby, i) => (
            <FlipCard key={i} item={hobby} />
          ))}
        </MyHobbiesContentCol>
      </Row>
    </MyHobbiesContainer>
  );
};

export default MyHobbies;
