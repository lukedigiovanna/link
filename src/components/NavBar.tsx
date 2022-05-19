import { LoginBox } from "./LoginBox";
import { SearchBar } from "./SearchBar";

function NavBar() {
    return (
        <nav className="navbar-t">
            <SearchBar />
            <LoginBox />
        </nav>
    );
}

export  { NavBar };