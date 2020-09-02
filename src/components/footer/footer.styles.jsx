import styled, { css } from "styled-components";
import fbImage from "../../assets/icon-facebook.png";
import twitterImage from "../../assets/icon-twitter.png";
import instaImage from "../../assets/icon-instagram.png";
import githubImage from "../../assets/icon-github.png";

const ImageSize = css`
  width: 20px;
  height: 20px;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  background-color: #313131;
`;

export const SocialNav = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0 0 0;
`;

export const Ul = styled.ul`
  display: inline-flex;
`;

export const Li = styled.li`
  margin: 0 8px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const Link = styled.a``;

export const FacebookImage = styled.div`
  background-image: url(${fbImage});
  ${ImageSize}
`;

export const TwitterImage = styled.div`
  background-image: url(${twitterImage});
  ${ImageSize}
`;

export const InstagramImage = styled.div`
  background-image: url(${instaImage});
  ${ImageSize}
`;

export const GithubImage = styled.div`
  background-image: url(${githubImage});
  ${ImageSize}
`;

export const Copyright = styled.p`
  text-align: center;
  font-weight: 200;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 8px;
`;
