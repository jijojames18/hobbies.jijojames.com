import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactFormReducer from "./contact-form/contact-form.reducer";
import videosReducer from "./videos/videos.reducer";
import blogReducer from "./blog/blog.reducer";
import galleryReducer from "./gallery/gallery.reducer";

const persistConfig = {
  key: process.env.REACT_APP_PERSIST_KEY,
  storage,
  blacklist: ["contactForm", "videos", "blog", "gallery"],
};

const rootReducer = combineReducers({
  contactForm: contactFormReducer,
  videos: videosReducer,
  blog: blogReducer,
  gallery: galleryReducer,
});

export default persistReducer(persistConfig, rootReducer);
