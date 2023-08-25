import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { galleryFetchStart } from '../../redux/gallery/gallery.actions';
import { selectGalleryIsLoading, selectGalleryList, selectGalleryTotal } from '../../redux/gallery/gallery.selectors';

import GalleryItem from '../../components/gallery-item/gallery-item';
import InfiniteScroll from '../../components/infinite-scroll/infinite-scroll';
import Spinner from '../../components/spinner/spinner';
import Masonry from '../../components/masonry-grid/masonry-grid';

import { GalleryContainerComponent } from '../../styles/common.styles';

const GalleryPage = ({ isLoading, galleryFetchStart, gallery, total }) => {
  const triggerFetch = () => {
    galleryFetchStart({
      from: gallery.length,
    });
  };

  useEffect(() => {
    triggerFetch();
  }, []);

  return (
    <GalleryContainerComponent className="gallery-container">
      <Masonry dataArray={gallery} columnCount={3} ChildsElement={GalleryItem}></Masonry>
      {isLoading ? (
        <Spinner></Spinner>
      ) : gallery.length < total ? (
        <InfiniteScroll triggerFetch={triggerFetch}></InfiniteScroll>
      ) : (
        ''
      )}
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
