import BlogTypes from './blog.types';

const BLOG_FETCH_LIMIT = 5;

export const blogFetchStart = (payload) => ({
  type: BlogTypes.BLOG_FETCH_START,
  payload: { ...payload, limit: BLOG_FETCH_LIMIT },
});

export const blogFetchSuccess = (payload) => ({
  type: BlogTypes.BLOG_FETCH_SUCCESS,
  payload,
});

export const blogFetchFailure = (payload) => ({
  type: BlogTypes.BLOG_FETCH_FAILURE,
  payload,
});
