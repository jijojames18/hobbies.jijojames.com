import styled from "styled-components";

export const BlogPost = styled.div`
  border-bottom: 1px solid #414141;
  padding-bottom: 65px;
  margin-bottom: 60px;
`;

export const TextContent = styled.div`
  margin-top: 30px;
  text-align: justify;
`;

export const DateSpan = styled.span`
  font-size: 16px;
  font-weight: 200;
  color: #fff;
  letter-spacing: 0.5px;
`;

export const TitleHeading = styled.h2`
  margin-top: 5px;
  font-size: 36px;
  color: #fff;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-weight: 300;
`;

export const BlogDesc = styled.p`
  color: #bbb;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  margin: 25px 0;
`;

export const ButtonLink = styled.a`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: transparent;
  color: #fff;
  letter-spacing: 2px;
  border-bottom: 3px solid #fff;
  padding-bottom: 3px;
  text-decoration: none;
  transition: all 0.5s;
  &:hover {
    text-decoration: none;
    opacity: 0.5;
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  overflow-y: hidden;
`;
