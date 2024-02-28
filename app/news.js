import data from "./data.js";
import "./news.css";

const News = () => {
  return (
    <div className="container custom-margin-top">
      <div className="row">
        {data.articles.map((item) => (
          <div className="col-sm-12 my-element">
            <img className="picter"src={item.urlToImage} alt={item.title} />
            <h5>{item.title}</h5>
            <p className="fontsize">{item.description}</p>
            <a className="fontsize" href={item.url}>
              Read full article {"->"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;


