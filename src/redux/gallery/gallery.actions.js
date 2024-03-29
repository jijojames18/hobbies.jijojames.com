import GalleryTypes from './gallery.types';

export const GALLERY_FETCH_LIMIT = 15;

export const galleryFetchStart = (payload) => ({
  type: GalleryTypes.GALLERY_FETCH_START,
  payload: { ...payload, limit: GALLERY_FETCH_LIMIT },
});

export const galleryFetchSuccess = (payload) => ({
  type: GalleryTypes.GALLERY_FETCH_SUCCESS,
  payload,
});

export const galleryFetchFailure = (payload) => ({
  type: GalleryTypes.GALLERY_FETCH_FAILURE,
  payload,
});
