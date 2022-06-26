import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import {
  OverlayMenuContainer,
  MainMenu,
  Ul,
  Li,
  Link,
} from "./overlay-menu.styles";

const OverlayMenu = ({ isMenuOpen }) => {
  const menuContainerRef = React.createRef();

  useEffect(() => {
    isMenuOpen
      ? menuContainerRef.current.classList.add("open")
      : menuContainerRef.current.classList.remove("open");
  }, [isMenuOpen, menuContainerRef]);

  return (
    <OverlayMenuContainer ref={menuContainerRef}>
      <Container>
        <Row>
          <MainMenu>
            <Ul>
              <Li>
                <Link href="/">Home</Link>
              </Li>
              <Li>
                <Link href="/about">About</Link>
              </Li>
              <Li>
                <Link href="/gallery">Gallery</Link>
              </Li>
              <Li>
                <Link href="/blog">Blog</Link>
              </Li>
            </Ul>
          </MainMenu>
        </Row>
      </Container>
    </OverlayMenuContainer>
  );
};

export default OverlayMenu;
