import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { blogFetchStart } from "../../redux/blog/blog.actions";
import {
  selectBlogIsLoading,
  selectBlogPosts,
  selectBlogTotal,
} from "../../redux/blog/blog.selectors";
import BlogItem from "../../components/blog-item/blog-item";
import Spinner from "../../components/spinner/spinner";
import ViewPage from "../view";
import { ContainerComponent } from "../../styles/common.styles";

const BlogPage = ({ isLoading, blogFetchStart, posts, total }) => {
  useEffect(() => {
    blogFetchStart({
      from: 0,
    });
  }, [blogFetchStart]);

  return isLoading ? (
    <Spinner />
  ) : (
    <ViewPage
      RenderComponent={BlogItem}
      fetchStart={blogFetchStart}
      total={total}
      items={posts}
      ContainerComponent={ContainerComponent}
      page="blog"
    />
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
