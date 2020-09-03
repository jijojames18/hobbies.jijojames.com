import React from "react";
import Col from "react-bootstrap/Col";
import { VideoItemContainer } from "./video-item.styles";

const VideoItem = ({ video }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <VideoItemContainer>
        <iframe
          title={"My video " + video.id}
          width="335"
          height="315"
          src={video.url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoItemContainer>
    </Col>
  );
};

export default VideoItem;
