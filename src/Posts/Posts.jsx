import React from 'react';
import styled from 'styled-components';

const BlogPostContainer = styled.div`
  background-color: lightpink;
  padding: 20px;
  border-radius: 10px;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const BlogPost = () => {
  return (
    <BlogPostContainer>
      <h1>My Blog Post</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec auctor massa at dui vehicula, at malesuada diam
        fermentum. Nunc at placerat felis.
      </p>
    </BlogPostContainer>
  );
};

export default BlogPost;
