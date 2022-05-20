import searchIcon from '../assets/images/search.png';

function SearchBar(props: { onSearch: (searchTerm: string) => void }) {
    return (
        <div className="search-bar">
            <img src={searchIcon} />
            <input
                placeholder="Search"
                onChange={(e) => {props.onSearch(e.currentTarget.value)}}
            />
        </div>
    )
}

export { SearchBar };