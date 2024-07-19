import "./newsarticle.css";
const Newsarticle = ({ article }) => {
    if (!article) {
        return null; 
    }

    return (
        <>
            <div className='col-sm-4'>
                {article.urlToImage && (
                    <img className='image' src={article.urlToImage} alt={article.title} />
                )}
            <h2 className='title'>{article.title}</h2>
            <p className='description'>{article.description}</p>
            <p className="arrow_para">
                Read full article <a className="url" href={article.url}>here</a>
            </p>
        </div>
    </>
    )
};

export default Newsarticle;
