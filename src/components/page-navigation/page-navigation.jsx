import React from 'react';

import NavigationArrow from '../navigation-arrow/navigation-arrow';
import { NavigationArrowContainer } from './page-navigation.styles';

const PageNavigation = ({ from, total, count, arrowClicked }) => {
  const shouldLeftArrowBeShown = from - count >= 0;
  const shouldRightArrowBeShown = from + count < total;

  const leftArrowClicked = () => {
    arrowClicked({
      from: from - count < 0 ? 0 : from - count,
    });
  };

  const rightArrowClicked = () => {
    arrowClicked({
      from: from + count,
    });
  };

  return (
    <NavigationArrowContainer>
      {shouldLeftArrowBeShown ? (
        <NavigationArrow direction="left" arrowClicked={leftArrowClicked}></NavigationArrow>
      ) : (
        ''
      )}
      {shouldRightArrowBeShown ? (
        <NavigationArrow direction="right" arrowClicked={rightArrowClicked}></NavigationArrow>
      ) : (
        ''
      )}
    </NavigationArrowContainer>
  );
};

export default PageNavigation;
