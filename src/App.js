import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">Hello World</h2>
      <label id="name" htmlFor="name">
        Name:
      </label>
      <input type="text" id="name"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"
      >
        Link
      </a>
    </article>
  );
}
