import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { ArrowContainer, ArrowItem } from './navigation-arrow.styles';
import { ContentColor } from '../../styles/common.styles';

const NavigationArrow = ({ direction, arrowClicked }) => {
  return (
    <ArrowContainer onClick={arrowClicked}>
      <ArrowItem>
        <FontAwesomeIcon icon={direction === 'left' ? faChevronLeft : faChevronRight} style={{ color: ContentColor }} />
      </ArrowItem>
    </ArrowContainer>
  );
};

export default NavigationArrow;
