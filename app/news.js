import data from "./data.js";
const News = () => {
    return (
        <div class="row">
            {data.articles.map((item) => (
                <div class="col1">   
                    <img src={item.urlToImage} />
                    <h5>{item.title}</h5>
                    <p>{item.description}</p> 
                    <a href={item.url}>
                    Read full article {"->"}
                    </a>
                </div>
            ))}
        </div>
    );
};
export default News;