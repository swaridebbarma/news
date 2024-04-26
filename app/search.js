"use client"
import "./search.css";
import "./newsarticle.css";
import Newsarticle from './Newsarticle.js';

import React, { useState } from 'react';


const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const [news, setNews] = useState([]);

    const handleSearch = () => {
        fetchNews(search);
    };

    const fetchNews = (newsName) => {
        fetch(
            `https://newsapi.org/v2/everything?q=${newsName}&sortBy=popularity&apiKey=aa33bbd22afd49eea4fea89536a508be`
        )
            .then((response) => response.json())
            .then((data) => {
                const firstNineArticles = [];
                for (let i = 0; i < 9 && i < data.articles.length; i++) {
                    firstNineArticles.push(data.articles[i]);
                }
                setNews(firstNineArticles);
            })

    };
    return (
        <>
            <div className="search-box">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="icon"
                />
                <button className="go" onClick={handleSearch}>
                    Go
                </button>
                <div className="col-12 col-md-4 my-element">
                    {news.map((article, index) => (
                        <Newsarticle key={index} newsData={article} />
                    ))}
                </div>

            </div>

        </>
    );
};

export default Search;



