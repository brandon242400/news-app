import React, { Component } from "react";
import { Container } from "./NavBarStyles";

export default class NavBar extends Component {
  render() {
    return (
      <Container>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <p>Item 4</p>
      </Container>
    );
  }
}
