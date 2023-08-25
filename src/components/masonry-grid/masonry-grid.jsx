// Forked out of https://github.com/bakunya/react-masonry
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { MasonryContainer, MasonryColumn } from './masonry-grid.styles';

const divideArray = (array, length) => {
  const newArray = [...array];
  const divideRes = Math.floor(newArray.length / length);
  let results = [];

  for (let i = 0; i < length; i++) {
    results.push(newArray.splice(0, divideRes));
  }

  for (let i = 0; i < newArray.length; i++) {
    results[i].push(newArray[i]);
  }

  results = results.filter((itm) => itm.length);

  return results;
};

const Masonry = ({ dataArray, columnCount, ChildsElement }) => {
  const results = divideArray(dataArray, columnCount);

  return (
    <Container fluid>
      <Row>
        <MasonryContainer>
          {results.map((item, i) => (
            <MasonryColumn key={i}>
              {item.map((elm, i) => (
                <ChildsElement item={elm} key={elm.id ?? i} />
              ))}
            </MasonryColumn>
          ))}
        </MasonryContainer>
      </Row>
    </Container>
  );
};

export default Masonry;
