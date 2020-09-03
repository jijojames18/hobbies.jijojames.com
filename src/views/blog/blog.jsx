import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { blogFetchStart } from "../../redux/blog/blog.actions";
import {
  selectBlogPosts,
  selectBlogTotal,
} from "../../redux/blog/blog.selectors";
import BlogItem from "../../components/blog-item/blog-item";
import LoadMoreButton from "../../components/load-more-button/load-more-button";
import { ContainerComponent } from "../../styles/common.styles";

const BlogPage = ({ blogFetchStart, posts, total }) => {
  useEffect(() => {
    blogFetchStart({
      from: 0,
    });
  }, [blogFetchStart]);

  const loadMoreClicked = (event) => {
    blogFetchStart({
      from: posts.length,
    });
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <ContainerComponent>
      <Container>
        {posts.map((blogItem) => {
          return <BlogItem key={blogItem.id} blog={blogItem} />;
        })}
      </Container>
      <Container>
        <Row>
          {posts.length < total ? (
            <LoadMoreButton loadMoreClicked={loadMoreClicked} />
          ) : (
            ""
          )}
        </Row>
      </Container>
    </ContainerComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectBlogPosts,
  total: selectBlogTotal,
});

const mapDispatchToProps = (dispatch) => ({
  blogFetchStart: (payload) => dispatch(blogFetchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
