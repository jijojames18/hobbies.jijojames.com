import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { galleryFetchStart } from "../../redux/gallery/gallery.actions";
import {
  selectGalleryList,
  selectGalleryTotal,
} from "../../redux/gallery/gallery.selectors";

import GalleryItem from "../../components/gallery-item/gallery-item";

import LoadMoreButton from "../../components/load-more-button/load-more-button";

import { GalleryContainer } from "./gallery.styles";

const GalleryPage = ({ galleryFetchStart, gallery, total }) => {
  useEffect(() => {
    galleryFetchStart({
      from: 0,
    });
  }, [galleryFetchStart]);

  const loadMoreClicked = (event) => {
    galleryFetchStart({
      from: gallery.length,
    });
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <GalleryContainer className="gallery-container">
      <Container fluid>
        <Row>
          {gallery.map((image) => {
            return <GalleryItem key={image.id} gallery={image} />;
          })}
        </Row>
      </Container>
      &nbsp; &nbsp;
      <Container>
        <Row>
          {gallery.length < total ? (
            <LoadMoreButton loadMoreClicked={loadMoreClicked} />
          ) : (
            ""
          )}
        </Row>
      </Container>
    </GalleryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  gallery: selectGalleryList,
  total: selectGalleryTotal,
});

const mapDispatchToProps = (dispatch) => ({
  galleryFetchStart: (payload) => dispatch(galleryFetchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
