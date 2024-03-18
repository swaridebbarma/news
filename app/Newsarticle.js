import "./newsarticle.css";
const Newsarticle = (props) => {
    return (
        <div className="col-12 col-md-4 my-element">
            <img className="img" src={props.newsData.image} />
            <h2 className="title">{props.newsData.title}</h2>
            <p className="description">{props.newsData.description}</p>
            <p className="more-details">  Read full article
                <a className="url" href={props.newsData.url}>
                    {"-->"}
                </a>
            </p>
        </div>
    )
};

export default Newsarticle;
