"use client"
import React, {useState} from 'react';
import { initial_articles } from './data.js'
import Header from './header.js';
import Search from "./search.js";
import Footer from './footer.js';
import News from './news.js';
import "./globals.css";


const Home = () => {
  let [article_data, setArticles] = useState(initial_articles);

  console.log(article_data)

  const changeArticles = (newArticles) => {
    setArticles(newArticles);
  };

  return (
    <>
      <Header />
      <div className="container">
      <Search changeArticles={changeArticles} />
        <h1 className="Top-News">Top News from India</h1>
        <News article1={article_data[0]} article2={article_data[1]} article3={article_data[2]} />
        <News article1={article_data[3]} article2={article_data[4]} article3={article_data[5]} />
        <News article1={article_data[6]} article2={article_data[7]} article3={article_data[8]} /> 
      </div>
      <Footer />
    </>
  );
};

export default Home;

