import GalleryTypes from "./gallery.types";

const INITIAL_STATE = {
  gallery: null,
  error: null,
};

const galleryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GalleryTypes.GALLERY_FETCH_SUCCESS:
      return {
        ...state,
        gallery: addImageToStore(state.gallery, action.payload),
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

const addImageToStore = (existingallery, newImages = []) => {
  let gallery = existingallery.map((image) => image);
  let imageIds = gallery.map((image) => image.id);

  for (let i = 0; i < newImages.length; i++) {
    const imageItem = newImages[i];
    const exisitingIndex = imageIds.indexOf(imageItem.id);
    if (exisitingIndex === -1) {
      gallery.push(imageItem);
      imageIds.push(imageItem.id);
    } else {
      gallery[exisitingIndex] = imageItem;
    }
  }

  return gallery;
};

export default galleryReducer;
