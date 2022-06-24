import styled from "styled-components";

export const GalleryItemContainer = styled.div`
  text-align: center;
  cursor: pointer;
  &:hover {
    h1 {
      transform: translateY(0);
    }

    p {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const GalleryItemLink = styled.a``;

export const GalleryItemThumb = styled.div`
  position: relative;
`;

export const GalleryItemHoverContent = styled.div`
  position: absolute;
  text-align: left;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const GalleryItemPlace = styled.h1`
  position: relative;
  font-size: 24px;
  text-transform: uppercase;
  display: inline-block;
  padding-left: 8px;
  transform: translateY(25px);
  transition: 0.5s ease-in-out;
`;

export const GalleryItemDate = styled.p`
  padding-left: 8px;
  font-weight: 300 !important;
  font-size: 14px;
  opacity: 0;
  transform: translateY(10px);
  transition: 0.5s ease-in-out;
  text-transform: uppercase;
`;

export const GalleryItemImage = styled.img`
  width: 100%;
  overflow: hidden;
`;
