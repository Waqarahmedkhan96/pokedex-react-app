import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        Pokédex
      </NavLink>

      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/pokedex" onClick={closeMenu}>
          Pokédex
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;