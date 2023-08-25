import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { galleryFetchStart } from '../../redux/gallery/gallery.actions';
import { selectGalleryIsLoading, selectGalleryList, selectGalleryTotal } from '../../redux/gallery/gallery.selectors';

import Spinner from '../../components/spinner/spinner';

import { GalleryContainerComponent } from '../../styles/common.styles';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-awesome-lightbox';

const GalleryPage = ({ isLoading, galleryFetchStart, gallery }) => {
  const triggerFetch = () => {
    galleryFetchStart({
      from: gallery.length,
    });
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = gallery.map((image) => ({ ...image, src: image.url, title: image.place, width: 360, height: 240 }));

  useEffect(() => {
    triggerFetch();
  }, []);

  return (
    <GalleryContainerComponent className="gallery-container">
      {isLoading ? <Spinner></Spinner> : <Gallery photos={photos} onClick={openLightbox}></Gallery>}
      {viewerIsOpen ? (
        <Lightbox
          images={photos}
          startIndex={photos.findIndex((item, index) => index === currentImage)}
          onClose={closeLightbox}
        ></Lightbox>
      ) : null}
    </GalleryContainerComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectGalleryIsLoading,
  gallery: selectGalleryList,
  total: selectGalleryTotal,
});

const mapDispatchToProps = (dispatch) => ({
  galleryFetchStart: (payload) => dispatch(galleryFetchStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
