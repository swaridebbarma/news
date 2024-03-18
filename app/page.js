import React from 'react';
import News from './news.js';
import Header from './header.js';
import Footer from './footer.js';
import { article_data } from './data.js'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
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

