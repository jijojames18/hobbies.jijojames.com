import BlogTypes from "./blog.types";

const INITIAL_STATE = {
  blog: null,
  error: null,
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogTypes.BLOG_FETCH_SUCCESS:
      return {
        ...state,
        blog: addBlogToStore(state.blog, action.payload),
        error: null,
      };
    case BlogTypes.BLOG_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case BlogTypes.BLOG_FETCH_START:
    default:
      return state;
  }
};

const addBlogToStore = (existingBlog, newBlog = []) => {
  let blog = existingBlog.map((blog) => blog);
  let blogIds = blog.map((blog) => blog.id);

  for (let i = 0; i < newBlog.length; i++) {
    const newBlogItem = newBlog[i];
    const exisitingIndex = blogIds.indexOf(newBlogItem.id);
    if (exisitingIndex === -1) {
      blog.push(newBlogItem);
      blogIds.push(newBlogItem.id);
    } else {
      blog[exisitingIndex] = newBlogItem;
    }
  }

  return blog;
};

export default blogReducer;
