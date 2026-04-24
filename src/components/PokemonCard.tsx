import { Link } from "react-router-dom";
import type { PokemonListItem } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = pokemon.url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link to={`/pokemon/${pokemon.name}`} className="pokemon-card">
      <span className="pokemon-number">#{id}</span>

      <img src={imageUrl} alt={pokemon.name} />

      <h3>{pokemon.name}</h3>
    </Link>
  );
}

export default PokemonCard;