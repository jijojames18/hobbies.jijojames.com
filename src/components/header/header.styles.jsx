import styled from 'styled-components';

import Logo from '../../assets/icon.png';

import { COMMON_HEIGHT as headerHeight } from '../../styles/common.styles';

export const HeaderContainer = styled.div`
  background: rgba(250, 250, 250, 0.2);
`;

export const Nav = styled.nav`
  height: ${headerHeight};
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 300;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-left: 2.25em;
`;

export const LogoLink = styled.a`
  background-image: url(${Logo});
  height: ${headerHeight};
  width: 150px;
  display: block;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 65%;
}
`;

export const MenuIcon = styled.div`
  background: transparent;
  border: 1px solid #fff;
  width: 50px;
  height: 50px;
  margin-right: 2.25em;
  position: relative;
  cursor: pointer;
  transition: background 0.5s;
  border-radius: 4px;

  &.active {
    background: rgba(250, 250, 250, 0.2);

    span {
      background-color: transparent;

      &:before {
        top: 0;
        transform: rotate(135deg);
      }

      &:after {
        top: 0;
        transform: rotate(-135deg);
      }
    }
  }
`;

export const MenuIconSpan = styled.span`
  &,
  &:before,
  &:after {
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 35px;
    background: white;
    position: absolute;
    left: 15%;
    top: 50%;
    display: block;
    content: '';
    transition: all 0.5s ease-in-out;
  }

  &:before {
    left: 0;
    top: -10px;
  }

  &:after {
    left: 0;
    top: 10px;
  }
`;
