import styled from "styled-components";
import fbImage from "../../assets/icon-facebook.png";
import twitterImage from "../../assets/icon-twitter.png";
import instaImage from "../../assets/icon-instagram.png";
import githubImage from "../../assets/icon-github.png";

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
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  list-style: none;
  display: block;
  background: #393939;
  margin: 0 8px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const Link = styled.a``;

export const FacebookImage = styled.div`
  background-image: url(${fbImage});
  width: 20px;
  height: 20px;
`;

export const TwitterImage = styled.div`
  background-image: url(${twitterImage});
  width: 20px;
  height: 20px;
`;

export const InstagramImage = styled.div`
  background-image: url(${instaImage});
  width: 20px;
  height: 20px;
`;

export const GithubImage = styled.div`
  background-image: url(${githubImage});
  width: 20px;
  height: 20px;
`;

export const Copyright = styled.p`
  text-align: center;
  color: #fff;
  font-weight: 200;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 8px;
`;
