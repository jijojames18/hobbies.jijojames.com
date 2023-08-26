import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Container from 'react-bootstrap/Container';

import { blogFetchStart } from '../../redux/blog/blog.actions';
import { selectBlogIsLoading, selectBlogPosts, selectBlogTotal } from '../../redux/blog/blog.selectors';

import BlogItem from '../../components/blog-item/blog-item';
import Spinner from '../../components/spinner/spinner';
import LoadMoreButton from '../../components/load-more-button/load-more-button';

import { ContainerComponent } from '../../styles/common.styles';

const BlogPage = ({ isLoading, blogFetchStart, posts, total }) => {
  const triggerFetch = () => {
    blogFetchStart({
      from: posts.length,
    });
  };

  useEffect(() => {
    triggerFetch();
    // eslint-disable-next-line
  }, []);

  const loadMoreClicked = (event) => {
    blogFetchStart({
      from: posts.length,
    });
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <ContainerComponent className="blog-container">
      <Container>
        {posts.map((item) => {
          return <BlogItem key={item.id} item={item} isEven={false} />;
        })}
      </Container>
      {isLoading ? (
        <Spinner></Spinner>
      ) : posts.length < total ? (
        <LoadMoreButton loadMoreClicked={loadMoreClicked} />
      ) : (
        ''
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
