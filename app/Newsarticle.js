import "./newsarticle.css";
const Newsarticle = ({ article }) => (
    <>
        <div className='col-sm-4'>
            <img className='image' src={article.urlToImage} alt={article.title} />
            <h2 className='title'>{article.title}</h2>
            <p className='description'>{article.description}</p>
            <p className="arrow_para">
                Read full article <a className="url" href={article.url}>here</a>
            </p>
        </div>
    </>
);

export default Newsarticle;
