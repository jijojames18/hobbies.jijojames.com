import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactFormReducer from "./contact-form/contact-form.reducer";

const persistConfig = {
  key: process.env.REACT_APP_PERSIST_KEY,
  storage,
  blacklist: ["contactForm"],
};

const rootReducer = combineReducers({
  contactForm: contactFormReducer,
});

export default persistReducer(persistConfig, rootReducer);
