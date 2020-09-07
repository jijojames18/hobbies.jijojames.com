import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import {
  CardListGroup,
  CardListGroupItem,
  CardBodyMainContent,
  CardBodyMainTitle,
  CardBodyMainText,
  CardLink,
} from "./project-card-item.styles";

const ProjectCardItem = ({
  item: {
    title,
    image,
    desc,
    technology,
    github_link: githubLink,
    site_link: siteLink,
  },
}) => {
  const listVariants = [
    "primary",
    "secondary",
    "succes",
    "danger",
    "warning",
    "info",
    "link",
    "dark",
  ];
  return (
    <Col sm={12} md={6} lg={4}>
      <Card bg="secondary">
        <Card.Body>
          <Card.Img variant="top" src={image}></Card.Img>
          <CardListGroup horizontal>
            {technology.map((item, i) => (
              <CardListGroupItem variant={listVariants[i]} key={i}>
                {item}
              </CardListGroupItem>
            ))}
          </CardListGroup>
        </Card.Body>
        <CardBodyMainContent>
          <CardBodyMainTitle>{title}</CardBodyMainTitle>
          <CardBodyMainText>{desc}</CardBodyMainText>
        </CardBodyMainContent>

        <Card.Footer className="text-muted">
          <CardLink href={siteLink} rel="noopener noreferrer" target="_blank">
            Website
          </CardLink>
          <CardLink href={githubLink} rel="noopener noreferrer" target="_blank">
            Github
          </CardLink>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCardItem;
