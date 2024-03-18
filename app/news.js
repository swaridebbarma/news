import "./news.css";
import Newsarticle from './Newsarticle.js';
const News = (props) => {
  return (

    <div className="row">
      <Newsarticle newsData={props.article1} />
      <Newsarticle newsData={props.article2} />
      <Newsarticle newsData={props.article3} />
    </div>
  );
};

export default News;





