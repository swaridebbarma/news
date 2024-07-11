import React from 'react';
import Newsarticle from "./Newsarticle.js";

const News= ({article1, article2, article3}) => {
    return (
        <>
            <div className="row">
                <Newsarticle article={article1}/>
                <Newsarticle article={article2}/>
                <Newsarticle article={article3}/>
            </div>
        </>
    );
}
export default News;
