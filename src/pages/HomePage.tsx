import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">React Assignment 2</p>
        <h1>Build and explore your own Pokédex</h1>
        <p>
          Browse Pokémon, move through pages, and open detailed information such
          as types, abilities, height, weight and stats.
        </p>

        <div className="hero-actions">
          <Link to="/pokedex" className="primary-button">
            Open Pokédex
          </Link>
          <Link to="/about" className="secondary-button">
            About Project
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
        />
        <h2>Pikachu</h2>
        <p>Start browsing Pokémon using real data from PokéAPI.</p>
      </div>
    </section>
  );
}

export default HomePage;
