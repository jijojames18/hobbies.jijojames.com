import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export const ContainerCol = styled(Col)`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const CardListGroup = styled(ListGroup)`
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const CardListGroupItem = styled(ListGroupItem)`
  font-size: 14px;
  margin: 8px 0;
`;

export const CardBodyMainContent = styled(Card.Body)`
  margin-top: 0px;
  padding-top: 0px;
`;

export const CardBodyMainTitle = styled(Card.Title)`
  color: #fff;
  font-weight: bold;
`;

export const CardBodyMainText = styled(Card.Text)`
  text-align: justify;
`;

export const CardLink = styled(Card.Link)`
  font-size: 16px;
`;
