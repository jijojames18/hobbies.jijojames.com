import { mergeItems } from "../redux.utils";

import GalleryTypes from "./gallery.types";

const INITIAL_STATE = {
  gallery: [],
  error: null,
  total: 0,
};

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GalleryTypes.GALLERY_FETCH_SUCCESS:
      return {
        ...state,
        gallery: mergeItems(state.gallery, action.payload.items),
        total: action.payload.total ? action.payload.total : state.total,
        error: null,
      };
    case GalleryTypes.GALLERY_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GalleryTypes.GALLERY_FETCH_START:
    default:
      return state;
  }
};

export default galleryReducer;
