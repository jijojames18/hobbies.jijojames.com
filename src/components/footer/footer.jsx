import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {
  FooterContainer,
  SocialNav,
  Ul,
  Li,
  Link,
  FacebookImage,
  TwitterImage,
  InstagramImage,
  GithubImage,
  Copyright,
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <SocialNav>
      <Ul>
        <Li>
          <Link
            href="https://www.facebook.com/jk.jijo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookImage alt="Facebook Page" />
          </Link>
        </Li>
        <Li>
          <Link
            href="https://twitter.com/jijojames18"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterImage alt="Twitter Page" />
          </Link>
        </Li>
        <Li>
          <Link
            href="https://www.instagram.com/pixeleefied"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramImage alt="Instagram Page" />
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
      </Ul>
    </SocialNav>
    <Container fluid>
      <Col md={12}>
        <Copyright>
          Copyright &copy; {new Date().getFullYear()} jijojames.com
        </Copyright>
      </Col>
    </Container>
  </FooterContainer>
);

export default Footer;
