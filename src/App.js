import React, { Component } from "react";
import "./App.css";
// import ArticleDisplayContainer from "./article-display/ArticleDisplayContainer";
import NavBar from "./navigation/NavBar";
import HomePage from "./home-page/HomePage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>News App</h1>
        <HomePage />
        {/* <ArticleDisplayContainer /> */}
      </div>
    );
  }
}
