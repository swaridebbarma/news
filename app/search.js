import "./search.css";

const Search = () => {
    return (
        <>
            <div className="perent-container">
                <div className="search-container">
                    <img src="Frame 15.svg" alt="Search Icon" className="search-icon" />
                    <input type="text" className="name" placeholder="Search" />
                    <button type="submit" className="go">Go</button>
                </div>
            </div>
        </>
    );
};
export default Search;