import VideoTypes from "./videos.types";

const VIDEOS_FETCH_LIMIT = 10;

export const videoFetchStart = (payload) => ({
  type: VideoTypes.VIDEO_FETCH_START,
  payload: { ...payload, limit: VIDEOS_FETCH_LIMIT },
});

export const videoFetchSuccess = (payload) => ({
  type: VideoTypes.VIDEO_FETCH_SUCCESS,
  payload,
});

export const videoFetchFailure = (payload) => ({
  type: VideoTypes.VIDEO_FETCH_FAILURE,
  payload,
});
