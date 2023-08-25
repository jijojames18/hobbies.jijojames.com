import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ContentLoader from 'react-content-loader';

import { CenteredSpinner } from './spinner.styles';

const Spinner = () => (
  <Container>
    <Row>
      <CenteredSpinner>
        <ContentLoader viewBox="0 0 400 160" height={160} width={400} backgroundColor="transparent">
          <circle cx="150" cy="100" r="30" />
          <circle cx="250" cy="100" r="30" />
          <circle cx="350" cy="100" r="30" />
        </ContentLoader>
      </CenteredSpinner>
    </Row>
  </Container>
);

export default Spinner;
