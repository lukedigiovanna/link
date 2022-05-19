import searchIcon from '../assets/images/search.png';

function SearchBar() {
    return (
        <div className="search-bar">
            <img src={searchIcon} />
            <input
                placeholder="Search"
            />
        </div>
    )
}

export { SearchBar };