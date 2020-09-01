import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  GalleryItemContainer,
  GalleryItemLink,
  GalleryItemThumb,
  GalleryItemHoverEffect,
  GalleryItemHoverContent,
  GalleryItemPlace,
  GalleryItemDate,
  GalleryItemImageContainer,
  GalleryItemImage,
} from "./gallery-item.styles";

const GalleryItem = ({ gallery: { place, date, url } }) => {
  return (
    <Col md={4} sm={6}>
      <GalleryItemContainer>
        <GalleryItemLink href={url} data-lightbox="image-1">
          <GalleryItemThumb>
            <GalleryItemHoverEffect>
              <GalleryItemHoverContent>
                <GalleryItemPlace>{place}</GalleryItemPlace>
                <GalleryItemDate>{date}</GalleryItemDate>
              </GalleryItemHoverContent>
            </GalleryItemHoverEffect>
            <GalleryItemImageContainer>
              <GalleryItemImage width="360" height="360" src={url} />
            </GalleryItemImageContainer>
          </GalleryItemThumb>
        </GalleryItemLink>
      </GalleryItemContainer>
    </Col>
  );
};

export default GalleryItem;
