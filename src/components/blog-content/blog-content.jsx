import React from "react";

import {
  TextContent,
  DateSpan,
  TitleHeading,
  BlogDesc,
  ButtonContainer,
  ButtonLink,
} from "./blog-content.styles";

const BlogContent = ({ date, title, desc, url }) => {
  return (
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
  );
};

export default BlogContent;
