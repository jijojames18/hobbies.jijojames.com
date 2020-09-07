import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import LoadMoreButton from "../components/load-more-button/load-more-button";

const ViewPage = ({
  fetchStart,
  items,
  total,
  RenderComponent,
  ContainerComponent,
  page,
}) => {
  const loadMoreClicked = (event) => {
    fetchStart({
      from: items.length,
    });
    event.preventDefault();
    event.stopPropagation();
  };

  const getPageStructure = () => {
    if (page === "blog") {
      return (
        <Container>
          {items.map((item) => {
            return <RenderComponent key={item.id} item={item} />;
          })}
        </Container>
      );
    } else if (page === "videos") {
      return (
        <Container>
          <Row>
            {items.map((item) => {
              return <RenderComponent key={item.id} item={item} />;
            })}
          </Row>
        </Container>
      );
    } else if (page === "gallery" || page === "projects") {
      return (
        <Container fluid>
          <Row>
            {items.map((item) => {
              return <RenderComponent key={item.id} item={item} />;
            })}
          </Row>
        </Container>
      );
    }

    return "";
  };

  return (
    <ContainerComponent className={page + "-container"}>
      {getPageStructure()}
      <Container>
        <Row>
          {items.length < total ? (
            <LoadMoreButton loadMoreClicked={loadMoreClicked} />
          ) : (
            ""
          )}
        </Row>
      </Container>
    </ContainerComponent>
  );
};

export default ViewPage;
