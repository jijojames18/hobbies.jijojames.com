import styled, { css } from 'styled-components';
import twitterImage from '../../assets/icon-twitter.png';
import githubImage from '../../assets/icon-github.png';
import linkedinImage from '../../assets/icon-linkedin.png';

import { COMMON_HEIGHT as footerHeight } from '../../styles/common.styles';

const ImageSize = css`
  width: 20px;
  height: 20px;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: ${footerHeight};
  background-color: #313131;
`;

export const SocialNav = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5em 0 0 0;
`;

export const Ul = styled.ul`
  display: inline-flex;
`;

export const Li = styled.li`
  margin: 0 0.5em;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const Link = styled.a``;

export const TwitterImage = styled.div`
  background-image: url(${twitterImage});
  ${ImageSize}
`;

export const GithubImage = styled.div`
  background-image: url(${githubImage});
  ${ImageSize}
`;

export const LinkedinImage = styled.div`
  background-image: url(${linkedinImage});
  ${ImageSize}
`;

export const Copyright = styled.p`
  text-align: center;
  font-weight: 200;
  font-size: 1em;
  padding-top: 1em;
`;
