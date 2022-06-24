import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { blogFetchStart } from "../../redux/blog/blog.actions";
import {
  selectBlogIsLoading,
  selectBlogPosts,
  selectBlogTotal,
} from "../../redux/blog/blog.selectors";
import BlogItem from "../../components/blog-item/blog-item";
import Spinner from "../../components/spinner/spinner";
import { ContainerComponent } from "../../styles/common.styles";
import InfiniteScroll from "../../components/infinite-scroll/infinite-scroll";

const BlogPage = ({ isLoading, blogFetchStart, posts, total }) => {
  const triggerFetch = () => {
    blogFetchStart({
      from: posts.length,
    });
  };

  useEffect(() => {
    triggerFetch();
  }, []);

  return (
    <ContainerComponent className="blog-container">
      <Container>
        {posts.map((item, i) => {
          return <BlogItem key={item.id} item={item} isEven={i % 2 === 0} />;
        })}
      </Container>
      {isLoading ? (
        <Container>
          <Row>
            <Spinner></Spinner>
          </Row>
        </Container>
      ) : posts.length < total ? (
        <InfiniteScroll triggerFetch={triggerFetch}></InfiniteScroll>
      ) : (
        ""
      )}
    </ContainerComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectBlogIsLoading,
  posts: selectBlogPosts,
  total: selectBlogTotal,
});

const mapDispatchToProps = (dispatch) => ({
  blogFetchStart: (payload) => dispatch(blogFetchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
