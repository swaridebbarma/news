import "./header.css";

const Header = () => {
  return (
    <>
      <div className="container-fuild custom-margin-top">
        <h1 className='text'>NewsAPI
          <img className="imgElement"
            src="Ellipse 1.svg"
            alt="Logo"
          />Org
        </h1>
        <div className="line mt-4"></div>
        <div className="line mt-1"></div>
      </div>
      <div className="container custom-margin-top">
        <div className="row ">
          <div className=" col ">
            <input type="text" className="search" placeholder="Search" />
            <button className="btn btn-danger border border-dark">Go</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;