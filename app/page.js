"use client";
import News from './news.js';
import "./page.module.css";
import "./news.css";
export default function Home() {
  return (
    <div>
      <center>
        <h1>
          NewsAPI <img className="logo" src="Ellipse 1.svg" alt="Logo" /> ORG
        </h1>
      </center>
      <hr />
      <hr />
      <center>
        <div>
          <input placeholder="Search" />
          <button>Go</button>
        </div>
      </center>
      <h4 >TOP NEWS FROM INDIA</h4>
      <News />
    </div>
  );
}
