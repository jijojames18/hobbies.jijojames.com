import React from "react";

import {
  GalleryItemContainer,
  GalleryItemLink,
  GalleryItemThumb,
  GalleryItemHoverContent,
  GalleryItemPlace,
  GalleryItemDate,
  GalleryItemImage,
} from "./gallery-item.styles";

const GalleryItem = ({ item: { place, date, url } }) => {
  return (
    <GalleryItemContainer>
      <GalleryItemLink href={url} data-lightbox="my-gallery">
        <GalleryItemThumb>
          <GalleryItemHoverContent>
            <GalleryItemPlace>{place}</GalleryItemPlace>
            <GalleryItemDate>{date}</GalleryItemDate>
          </GalleryItemHoverContent>
          <GalleryItemImage src={url} />
        </GalleryItemThumb>
      </GalleryItemLink>
    </GalleryItemContainer>
  );
};

export default GalleryItem;
