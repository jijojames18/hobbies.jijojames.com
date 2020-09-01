import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { blogFetchStart } from "../../redux/blog/blog.actions";
import {
  selectBlogList,
  selectBlogTotal,
} from "../../redux/blog/blog.selectors";

import BlogItem from "../../components/blog-item/blog-item";

import LoadMoreButton from "../../components/load-more-button/load-more-button";

import { BlogContainer } from "./blog.styles";

const BlogPage = ({ blogFetchStart, blog, total }) => {
  useEffect(() => {
    blogFetchStart({
      from: 0,
    });
  }, [blogFetchStart]);

  const loadMoreClicked = (event) => {
    blogFetchStart({
      from: blog.length,
    });
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <BlogContainer>
      <Container>
        {blog.map((blogItem) => {
          return <BlogItem key={blogItem.id} blog={blogItem} />;
        })}
      </Container>
      &nbsp; &nbsp;
      <Container>
        <Row>
          {blog.length < total ? (
            <LoadMoreButton loadMoreClicked={loadMoreClicked} />
          ) : (
            ""
          )}
        </Row>
      </Container>
    </BlogContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  blog: selectBlogList,
  total: selectBlogTotal,
});

const mapDispatchToProps = (dispatch) => ({
  blogFetchStart: (payload) => dispatch(blogFetchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
