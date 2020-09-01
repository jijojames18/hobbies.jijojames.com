import styled from "styled-components";

export const GalleryItemContainer = styled.div`
  text-align: center;
  line-height: 150%;
  text-transform: lowercase;
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

export const GalleryItemHoverEffect = styled.div``;

export const GalleryItemHoverContent = styled.div`
  position: absolute;
  text-align: left;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const GalleryItemPlace = styled.h1`
  position: relative;
  font-size: 22px;
  text-transform: uppercase;
  color: #fff;
  display: inline-block;
  padding-left: 20px;
  line-height: 15px;
  transform: translateY(25px);
  transition: 0.5s ease-in-out;
  letter-spacing: 0.5px;
`;

export const GalleryItemDate = styled.p`
  padding-left: 20px;
  font-weight: 300 !important;
  letter-spacing: 0.5px;
  font-size: 14px;
  color: #fff;
  opacity: 0;
  transform: translateY(10px);
  transition: 0.5s ease-in-out;
  text-transform: uppercase;
`;

export const GalleryItemImageContainer = styled.div``;

export const GalleryItemImage = styled.img`
  width: 100%;
  overflow: hidden;
`;
