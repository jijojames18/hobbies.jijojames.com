import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { galleryFetchStart } from "../../redux/gallery/gallery.actions";
import {
  selectGalleryIsLoading,
  selectGalleryList,
  selectGalleryTotal,
} from "../../redux/gallery/gallery.selectors";
import GalleryItem from "../../components/gallery-item/gallery-item";
import Spinner from "../../components/spinner/spinner";
import ViewPage from "../view";
import { GalleryContainerComponent } from "../../styles/common.styles";

const GalleryPage = ({ isLoading, galleryFetchStart, gallery, total }) => {
  useEffect(() => {
    galleryFetchStart({
      from: 0,
    });
  }, [galleryFetchStart]);

  return isLoading ? (
    <Spinner />
  ) : (
    <ViewPage
      RenderComponent={GalleryItem}
      fetchStart={galleryFetchStart}
      total={total}
      items={gallery}
      ContainerComponent={GalleryContainerComponent}
      page="gallery"
    />
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
