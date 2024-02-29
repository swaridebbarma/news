import "./header.css";
import Search from "./search.js";


const Header = () => {
  return (
    <>
      <div className="container-fuild ">
        <h1 className='text'>NewsAPI
          <img className="imgElement"
            src="Ellipse 1.svg"
            alt="Logo"
          />Org
        </h1>
        <hr className="hr-margin" />
        <hr className="hr-margin" />
      </div>
      <Search/>

    </>
  );
};
export default Header;