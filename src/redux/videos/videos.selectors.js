import { createSelector } from "reselect";

export const selectVideos = (state) => state.videos;

export const selectVideoList = createSelector(
  [selectVideos],
  (state) => state.videos
);

export const selectVideoTotal = createSelector(
  [selectVideos],
  (state) => state.total
);
