import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { galleryFetchStart, GALLERY_FETCH_LIMIT as galleryFetchLimit } from '../../redux/gallery/gallery.actions';
import { selectGalleryIsLoading, selectGalleryList, selectGalleryTotal } from '../../redux/gallery/gallery.selectors';

import Spinner from '../../components/spinner/spinner';
import PageNavigation from '../../components/page-navigation/page-navigation';
import { GalleryContainerComponent } from '../../styles/common.styles';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-awesome-lightbox';

const GalleryPage = ({ isLoading, galleryFetchStart, gallery, total }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [fetchIndex, setFetchIndex] = useState(0);

  const triggerFetch = () => {
    galleryFetchStart({
      from: fetchIndex,
    });
  };

  const onArrowClicked = ({ from }) => {
    setFetchIndex(from);
  };

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = gallery
    .filter((image, imageIndex) => imageIndex >= fetchIndex && imageIndex < fetchIndex + galleryFetchLimit)
    .map((image) => ({ ...image, src: image.url, title: image.place, width: 360, height: 240 }));

  useEffect(() => {
    triggerFetch();
  }, [fetchIndex]);

  return (
    <GalleryContainerComponent className="gallery-container">
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <React.Fragment>
          <Gallery photos={photos} onClick={openLightbox}></Gallery>
          <PageNavigation
            from={fetchIndex}
            total={total}
            count={galleryFetchLimit}
            arrowClicked={onArrowClicked}
          ></PageNavigation>
        </React.Fragment>
      )}
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
