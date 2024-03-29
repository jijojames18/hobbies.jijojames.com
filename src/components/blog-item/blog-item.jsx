import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlogContent from '../blog-content/blog-content';

import { BlogPost, BlogImage } from './blog-item.styles';

const BlogItem = ({ item: { date, title, desc, url, image } }) => {
  return (
    <BlogPost>
      <Row>
        <Col md={4}>
          <BlogImage src={image} height="400px" width="360px" alt={title} />
        </Col>
        <Col md={8}>
          <BlogContent date={date} title={title} desc={desc} url={url} />
        </Col>
      </Row>
    </BlogPost>
  );
};

export default BlogItem;
