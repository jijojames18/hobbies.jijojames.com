import { mergeItems } from "../redux.utils";
import BlogTypes from "./blog.types";

const INITIAL_STATE = {
  posts: [],
  error: null,
  total: 0,
  isLoading: false,
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogTypes.BLOG_FETCH_SUCCESS:
      return {
        ...state,
        posts: mergeItems(state.posts, action.payload.items),
        total: action.payload.total ? action.payload.total : state.total,
        error: null,
        isLoading: false,
      };
    case BlogTypes.BLOG_FETCH_FAILURE:
      return {
        ...state,
        total: 0,
        error: action.payload,
        isLoading: false,
      };
    case BlogTypes.BLOG_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default blogReducer;
