import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { videoFetchStart } from "../../redux/videos/videos.actions";
import {
  selectVideoIsLoading,
  selectVideoList,
  selectVideoTotal,
} from "../../redux/videos/videos.selectors";
import VideoItem from "../../components/video-item/video-item";
import Spinner from "../../components/spinner/spinner";
import ViewPage from "../view";
import { ContainerComponent } from "../../styles/common.styles";

const VideosPage = ({ isLoading, videoFetchStart, videos, total }) => {
  useEffect(() => {
    videoFetchStart({
      from: 0,
    });
  }, [videoFetchStart]);

  return isLoading ? (
    <Spinner />
  ) : (
    <ViewPage
      RenderComponent={VideoItem}
      fetchStart={videoFetchStart}
      total={total}
      items={videos}
      ContainerComponent={ContainerComponent}
      page="videos"
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectVideoIsLoading,
  videos: selectVideoList,
  total: selectVideoTotal,
});

const mapDispatchToProps = (dispatch) => ({
  videoFetchStart: (payload) => dispatch(videoFetchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosPage);
