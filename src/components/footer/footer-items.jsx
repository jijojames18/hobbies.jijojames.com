import React from 'react';
import { SocialNav, Ul, Li, Link, TwitterImage, GithubImage, LinkedinImage } from './footer.styles';

const FooterItems = () => (
  <SocialNav>
    <Ul>
      <Li>
        <Link href="https://www.linkedin.com/in/jijojames18" rel="noopener noreferrer" target="_blank">
          <LinkedinImage alt="LinkedIn Page" />
        </Link>
      </Li>
      <Li>
        <Link href="https://github.com/jijojames18" rel="noopener noreferrer" target="_blank">
          <GithubImage alt="Github Page" />
        </Link>
      </Li>
    </Ul>
  </SocialNav>
);

export default FooterItems;
