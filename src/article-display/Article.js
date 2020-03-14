import React from "react";
import styled from "styled-components";

export default function Article(props) {
  const title = props.articleContent.title;
  const content = props.articleContent.content;
  return (
    <Container>
      <h3>{title}</h3>
      <p>{content}</p>
    </Container>
  );
}

// Styles
const Container = styled.div`
  width: 80%;
  margin: 3vh auto;
  height: fit-content;
  background: rbga(60, 60, 60, 0.3);
  border: 1px solid red;

  h3 {
    text-decoration: underline;
  }

  p {
    font-weight: 400;
  }
`;
