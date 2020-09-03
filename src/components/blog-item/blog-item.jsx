import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BlogPost,
  TextContent,
  DateSpan,
  TitleHeading,
  BlogDesc,
  ButtonContainer,
  ButtonLink,
  BlogImage,
} from "./blog-item.styles";

const BlogItem = ({ item: { date, title, desc, url, image } }) => {
  return (
    <BlogPost>
      <Row>
        <Col md={8}>
          <TextContent>
            <DateSpan>{date}</DateSpan>
            <TitleHeading>{title}</TitleHeading>
            <BlogDesc>{desc}</BlogDesc>
            <ButtonContainer>
              <ButtonLink target="_blank" rel="noopener noreferrer" href={url}>
                Read More
              </ButtonLink>
            </ButtonContainer>
          </TextContent>
        </Col>
        <Col md={4}>
          <BlogImage src={image} height="400px" width="360px" alt={title} />
        </Col>
      </Row>
    </BlogPost>
  );
};

export default BlogItem;
