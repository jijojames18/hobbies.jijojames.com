import VideoTypes from "./videos.types";
import { mergeItems } from "../redux.utils";

const INITIAL_STATE = {
  videos: [],
  error: null,
  total: 0,
};

const videosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VideoTypes.VIDEO_FETCH_SUCCESS:
      return {
        ...state,
        videos: mergeItems(state.videos, action.payload.items),
        total: action.payload.total ? action.payload.total : state.total,
        error: null,
      };
    case VideoTypes.VIDEO_FETCH_FAILURE:
      return {
        ...state,
        total: 0,
        error: action.payload,
      };
    case VideoTypes.VIDEO_FETCH_START:
    default:
      return state;
  }
};

export default videosReducer;
