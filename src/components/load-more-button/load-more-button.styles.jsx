import styled from 'styled-components';
import { commonHeight, ButtonStyles } from '../../styles/common.styles';

export const LoadMoreButtonContainer = styled.div`
  text-align: center;
`;

export const LoadMoreLink = styled.a`
  margin: 1em 0;
  height: calc(${commonHeight} / 2);
  display: inline-block;
  line-height: calc(${commonHeight} / 2);
  font-size: 1em;
  color: #fff;
  background-color: #989898;
  transition: all 0.5s;

  &:hover {
    color: rgba(250, 250, 250, 0.5);
    text-decoration: none;
  }

  ${ButtonStyles}
`;
