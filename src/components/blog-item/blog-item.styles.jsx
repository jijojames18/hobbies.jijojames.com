import styled from 'styled-components';

import { BorderColor } from '../../styles/common.styles';

export const BlogPost = styled.div`
  border-bottom: 1px solid ${BorderColor};
  padding-bottom: 4.5em;
  margin-bottom: 4.5em;
  :last-child {
    margin-bottom: 0px;
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  overflow-y: hidden;
`;
