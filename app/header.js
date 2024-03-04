import "./header.css";
import Search from "./search.js";
const Header = () => {
  return (
    <>
        <div className='text'>NewsAPI
          <img className="imgElement"
            src="Ellipse 1.svg"
            alt="Logo"
          />Org
        </div>
        <hr className="hr-margin" />
        <hr className="hr-margin" />
      <Search/>

    </>
  );
};
export default Header;