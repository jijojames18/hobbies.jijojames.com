import React from "react";

import {
  FlipCardContainer,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
  FlipCardHeading,
} from "./flip.card.styles";

const FlipCard = ({ item }) => (
  <FlipCardContainer>
    <FlipCardInner className="flip-card-inner">
      <FlipCardFront>{<item.img />}</FlipCardFront>
      <FlipCardBack>
        <FlipCardHeading>{item.title}</FlipCardHeading>
      </FlipCardBack>
    </FlipCardInner>
  </FlipCardContainer>
);

export default FlipCard;
