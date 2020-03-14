import React, { Component } from "react";
import styled from "styled-components";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <h2>Home Page</h2>
      </Container>
    );
  }
}

// Styles

const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: rgba(100, 100, 100, 0.25);
  box-shadow: 1px 1px 10px 0 #333;
  width: 80%;
  min-height: 500px;
  margin: auto;
  margin-bottom: 5vh;

  h2 {
    text-decoration: underline;
    margin-top: 3vh;
  }
`;
