import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "../error-boundary/error-boundary.styles";

const PageNotFound = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer />
    <ErrorImageText>
      Oops! This is embarrasing. Something really went wrong...
    </ErrorImageText>
  </ErrorImageOverlay>
);

export default PageNotFound;
