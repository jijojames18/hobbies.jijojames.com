import { createSelector } from "reselect";

export const selectBlog = (state) => state.blog;

export const selectBlogList = createSelector(
  [selectBlog],
  (state) => state.gallery
);

export const selectBlogTotal = createSelector(
  [selectBlog],
  (state) => state.total
);
