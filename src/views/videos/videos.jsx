import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { videoFetchStart } from "../../redux/videos/videos.actions";
import {
  selectVideoList,
  selectVideoTotal,
} from "../../redux/videos/videos.selectors";
import VideoItem from "../../components/video-item/video-item";
import LoadMoreButton from "../../components/load-more-button/load-more-button";
import { ContainerComponent } from "../../styles/common.styles";

const VideosPage = ({ videoFetchStart, videos, total }) => {
  useEffect(() => {
    videoFetchStart({
      from: 0,
    });
  }, [videoFetchStart]);

  const loadMoreClicked = (event) => {
    videoFetchStart({
      from: videos.length,
    });
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <ContainerComponent>
      <Container>
        <Row>
          {videos.map((video) => {
            return <VideoItem key={video.id} video={video} />;
          })}
        </Row>
      </Container>
      <Container>
        <Row>
          {videos.length < total ? (
            <LoadMoreButton loadMoreClicked={loadMoreClicked} />
          ) : (
            ""
          )}
        </Row>
      </Container>
    </ContainerComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  videos: selectVideoList,
  total: selectVideoTotal,
});

const mapDispatchToProps = (dispatch) => ({
  videoFetchStart: (payload) => dispatch(videoFetchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosPage);
