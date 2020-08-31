import VideoTypes from "./videos.types";

const INITIAL_STATE = {
  videos: null,
  error: null,
};

const videosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VideoTypes.VIDEO_FETCH_SUCCESS:
      return {
        ...state,
        videos: addVideosToStore(state.videos, action.payload),
        error: null,
      };
    case VideoTypes.VIDEO_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case VideoTypes.VIDEO_FETCH_START:
    default:
      return state;
  }
};

const addVideosToStore = (existingVideos, newVideos = []) => {
  let videos = existingVideos.map((video) => video);
  let videoIds = videos.map((video) => video.id);

  for (let i = 0; i < newVideos.length; i++) {
    const newVideo = newVideos[i];
    const exisitingIndex = videoIds.indexOf(newVideo.id);
    if (exisitingIndex === -1) {
      videos.push(newVideo);
      videoIds.push(newVideo.id);
    } else {
      videos[exisitingIndex] = newVideo;
    }
  }

  return videos;
};

export default videosReducer;
