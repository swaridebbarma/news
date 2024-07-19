import React, { useState } from "react";

const Search = ({ changeArticles }) => {
    const [search, setSearch] = useState("");

    const handleSearchInput = (e) => {
        setSearch(fetchNews);
    };

    const fetchNews = function (newsName) {

        fetch(
            `https://newsapi.org/v2/everything?q=${newsName}&sortBy=popularity&apiKey=aa33bbd22afd49eea4fea89536a508be`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.articles && data.articles.length > 0) {
                    const searchArticles = [];
                    for (let i = 0; i < 9; i++) {
                        const article = data.articles[i];
                        if (article) {
                            searchArticles.push({
                                id: article.url,
                                title: article.title,
                                urlToImage: article.urlToImage,
                                description: article.description,
                                url: article.url,
                            });
                        }
                    }
                    changeArticles(searchArticles);
                }
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
            });
    };

    return (

        <div className="search">
            <input
                type="search"
                placeholder="Search"
                className="search-bar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className="go_button"
                onClick={handleSearchInput}
            >Go</button>
        </div>

    );
};

export default Search;