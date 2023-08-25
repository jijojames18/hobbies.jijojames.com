import styled from 'styled-components';
import { ButtonStyles } from '../../styles/common.styles';

export const TextContent = styled.div`
  text-align: justify;
`;

export const DateSpan = styled.span`
  font-size: 1em;
  font-weight: 200;
`;

export const TitleHeading = styled.h2`
  font-size: 2.5em;
  text-transform: capitalize;
  font-weight: 300;
`;

export const BlogDesc = styled.p`
  color: #bbb;
  font-size: 1em;
  font-weight: 300;
  margin-top: 1em;
`;

export const ButtonContainer = styled.div`
  margin: 1em 0;
`;

export const ButtonLink = styled.a`
  ${ButtonStyles}
`;
