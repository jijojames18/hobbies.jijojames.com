import React from "react";
import Card from "react-bootstrap/Card";
import FadeIn from "react-fade-in";

import {
  ContainerCol,
  CardItem,
  CardListGroup,
  CardListGroupItem,
  CardBodyImageContainer,
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
    <ContainerCol sm={12} md={6} lg={4}>
      <FadeIn delay={100} transitionDuration={750}>
        <CardItem>
          <CardBodyImageContainer>
            <Card.Img variant="top" src={image}></Card.Img>
            <div>
              <CardListGroup className="card-list-technology-group" horizontal>
                {technology.map((item, i) => (
                  <CardListGroupItem variant={listVariants[i]} key={i}>
                    {item}
                  </CardListGroupItem>
                ))}
              </CardListGroup>
            </div>
          </CardBodyImageContainer>
          <CardBodyMainContent>
            <CardBodyMainTitle>{title}</CardBodyMainTitle>
            <CardBodyMainText>{desc}</CardBodyMainText>
          </CardBodyMainContent>

          <Card.Footer className="text-muted">
            {siteLink ? (
              <CardLink
                href={siteLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Website
              </CardLink>
            ) : (
              ""
            )}
            {githubLink ? (
              <CardLink
                href={githubLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </CardLink>
            ) : (
              ""
            )}
          </Card.Footer>
        </CardItem>
      </FadeIn>
    </ContainerCol>
  );
};

export default ProjectCardItem;
