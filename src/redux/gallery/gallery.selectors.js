import { createSelector } from "reselect";

export const selectGallery = (state) => state.gallery;

export const selectGalleryList = createSelector(
  [selectGallery],
  (state) => state.gallery
);

export const selectGalleryTotal = createSelector(
  [selectGallery],
  (state) => state.total
);

export const selectGalleryIsLoading = createSelector(
  [selectGallery],
  (state) => state.isLoading
);
