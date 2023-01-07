import React from "react";
import {
  SocialNav,
  Ul,
  Li,
  Link,
  FacebookImage,
  TwitterImage,
  InstagramImage,
  GithubImage,
  LinkedinImage,
  YoutubeImage,
} from "./footer.styles";

const FooterItems = () => (
  <SocialNav>
    <Ul>
      {/* <Li>
        <Link
          href="https://www.facebook.com/pixeleefied"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FacebookImage alt="Facebook Page" />
        </Link>
      </Li> */}
      <Li>
        <Link
          href="https://twitter.com/jijojames18"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterImage alt="Twitter Page" />
        </Link>
      </Li>
      {/* <Li>
        <Link
          href="https://www.instagram.com/pixeleefied"
          rel="noopener noreferrer"
          target="_blank"
        >
          <InstagramImage alt="Instagram Page" />
        </Link>
      </Li> */}
      <Li>
        <Link
          href="https://www.linkedin.com/in/jijojames18"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedinImage alt="LinkedIn Page" />
        </Link>
      </Li>
      <Li>
        <Link
          href="https://github.com/jijojames18"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubImage alt="Github Page" />
        </Link>
      </Li>
      {/* <Li>
        <Link
          href="https://www.youtube.com/channel/UCio5ZAjlKr-ncg5owzIkn9Q"
          rel="noopener noreferrer"
          target="_blank"
        >
          <YoutubeImage alt="Youtube Channel" />
        </Link>
      </Li> */}
    </Ul>
  </SocialNav>
);

export default FooterItems;
