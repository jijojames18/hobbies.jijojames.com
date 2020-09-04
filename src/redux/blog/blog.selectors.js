import { createSelector } from "reselect";

export const selectBlog = (state) => state.blog;

export const selectBlogPosts = createSelector(
  [selectBlog],
  (state) => state.posts
);

export const selectBlogTotal = createSelector(
  [selectBlog],
  (state) => state.total
);

export const selectBlogIsLoading = createSelector(
  [selectBlog],
  (state) => state.isLoading
);
