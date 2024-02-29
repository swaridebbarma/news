import "./search.css";

const Search = () => {
    return (
        <>
            <div className="perent-container">
                <div class="search-container">
                    <img src="Frame 15.svg" alt="Search Icon" class="search-icon" />
                    <input type="text" class="name" placeholder="Search" />
                    <button type="submit" className="go">Go</button>
                </div>
            </div>
        </>
    );
};
export default Search;