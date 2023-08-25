import { mergeItems } from '../redux.utils';
import GalleryTypes from './gallery.types';

const INITIAL_STATE = {
  gallery: [],
  error: null,
  total: 0,
  isLoading: false,
};

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GalleryTypes.GALLERY_FETCH_SUCCESS:
      return {
        ...state,
        gallery: mergeItems(state.gallery, action.payload.items),
        total: action.payload.total ? action.payload.total : state.total,
        error: null,
        isLoading: false,
      };
    case GalleryTypes.GALLERY_FETCH_FAILURE:
      return {
        ...state,
        total: 0,
        error: action.payload,
        isLoading: false,
      };
    case GalleryTypes.GALLERY_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default galleryReducer;
