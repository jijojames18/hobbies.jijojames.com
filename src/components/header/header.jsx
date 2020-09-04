import React, { useState } from "react";
import {
  HeaderContainer,
  Nav,
  LogoContainer,
  LogoLink,
  MenuIcon,
  MenuIconSpan,
} from "./header.styles";
import OverlayMenu from "../overlay-menu/overlay-menu";

const Header = () => {
  const menuIconRef = React.createRef();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    isMenuOpen
      ? menuIconRef.current.classList.remove("active")
      : menuIconRef.current.classList.add("active");
    setMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer>
          <LogoLink href="/">JIJO JAMES</LogoLink>
        </LogoContainer>
        <MenuIcon onClick={handleMenuClick} ref={menuIconRef}>
          <MenuIconSpan></MenuIconSpan>
        </MenuIcon>
      </Nav>
      <OverlayMenu isMenuOpen={isMenuOpen} />
    </HeaderContainer>
  );
};

export default Header;
