import React from "react";
import Col from "react-bootstrap/Col";
import {
  LoadMoreButtonContainer,
  LoadMoreLink,
} from "./load-more-button.styles";

const LoadMoreButton = ({ loadMoreClicked }) => {
  return (
    <Col>
      <LoadMoreButtonContainer>
        <LoadMoreLink href="#" onClick={loadMoreClicked}>
          Load More
        </LoadMoreLink>
      </LoadMoreButtonContainer>
    </Col>
  );
};

export default LoadMoreButton;
