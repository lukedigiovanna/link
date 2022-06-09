import styled from 'styled-components';
import theme from '../../constants/theme';

const SearchBarComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

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

const SearchIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    transition: 0.6s;
`

const SearchField = styled.input`
    width: 0px;
    transition: 0.6s;
    border-radius: 12px;
    border: none;
    opacity: 0;
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.primaryTextColor};
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: ${theme.fonts.primary};

    &:focus {
        outline: none;
        width: 180px;
        opacity: 1;
    }
`

function SearchBar(props: { onSearch: (searchTerm: string) => void }) {
    return (
        <SearchBarComponent>
            <SearchIcon src={require("../../assets/images/search.png")} />
            <SearchField
                placeholder="Search"
                onChange={(e) => {props.onSearch(e.currentTarget.value)}}
            />
        </SearchBarComponent>
    )
}

export { SearchBar };