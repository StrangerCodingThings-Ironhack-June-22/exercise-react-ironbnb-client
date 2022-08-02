import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apartments">Apartments</NavLink>
            <NavLink to="/create">Create</NavLink>
        </nav>
    );
}

export default NavBar;