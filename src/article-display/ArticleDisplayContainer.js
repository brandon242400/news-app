import React from "react";
import Article from "./Article";

export default function ArticleDisplayContainer(props) {
  let articles = [];
  for (let x = 0; x < 10; x++) {
    articles.push(<Article articleContent={sampleContent} />);
  }
  return <div className="article-display-container">{articles}</div>;
}

const sampleContent = {
  title: "Article Title",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem reprehenderit numquam soluta beatae iusto consequatur sapiente voluptatum id cum quae ratione, qui tempore ex cumque vel labore, nemo quas esse?"
};
