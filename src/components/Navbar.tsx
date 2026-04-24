import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        Pokédex
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pokedex">Pokédex</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;