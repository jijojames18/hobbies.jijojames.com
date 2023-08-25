import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { SpinnerContainer, CenteredSpinner } from './spinner.styles';

const Spinner = () => (
  <Container>
    <Row>
      <CenteredSpinner>
        <SpinnerContainer />
      </CenteredSpinner>
    </Row>
  </Container>
);

export default Spinner;
