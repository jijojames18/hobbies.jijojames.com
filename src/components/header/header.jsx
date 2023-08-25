import React, { useState } from 'react';

import OverlayMenu from '../overlay-menu/overlay-menu';

import { HeaderContainer, Nav, LogoContainer, LogoLink, MenuIcon, MenuIconSpan } from './header.styles';

const Header = () => {
  const menuIconRef = React.createRef();
  const headerRef = React.createRef();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    isMenuOpen ? menuIconRef.current.classList.remove('active') : menuIconRef.current.classList.add('active');
    setMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer ref={headerRef}>
      <Nav>
        <LogoContainer>
          <LogoLink href="/"></LogoLink>
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
