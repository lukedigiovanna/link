import searchIcon from '../../assets/images/search.png';
import styled from 'styled-components';

const SearchBarComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        transition: 0.6s;
    }

    input {
        width: 0px;
        transition: 0.6s;
        border-radius: 12px;
        border: none;
        opacity: 0;
        background-color: $background-color;
        color: $primary-text-color;
        height: 30px;
        padding-left: 10px;
        padding-right: 10px;

        &:focus {
            outline: none;
            width: 180px;
            opacity: 1;
        }
    }

    &:hover {
        input {
            width: 180px;
            opacity: 1;
        }

        img {
            width: 35px;
            height: 35px;
        }
    }
`

function SearchBar(props: { onSearch: (searchTerm: string) => void }) {
    return (
        <SearchBarComponent>
            <img src={searchIcon} />
            <input
                placeholder="Search"
                onChange={(e) => {props.onSearch(e.currentTarget.value)}}
            />
        </SearchBarComponent>
    )
}

export { SearchBar };