import { useEffect, useState } from "react";
import { getPokemonList } from "../api/pokemonApi";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import type { PokemonListItem } from "../types/pokemon";

const LIMIT = 12;

function PokedexPage() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [offset, setOffset] = useState(0);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const page = offset / LIMIT + 1;

  useEffect(() => {
    async function loadPokemon() {
      try {
        setIsLoading(true);
        setError("");

        const data = await getPokemonList(LIMIT, offset);

        setPokemonList(data.results);
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
      } catch {
        setError("Could not load Pokémon. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemon();
  }, [offset]);

  function handleNext() {
    if (nextUrl) {
      setOffset(offset + LIMIT);
    }
  }

  function handlePrevious() {
    if (previousUrl) {
      setOffset(Math.max(0, offset - LIMIT));
    }
  }

  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">Pokédex</p>
        <h1>Browse Pokémon</h1>
        <p>
          Use pagination to move through Pokémon. Click a card to see detailed
          information.
        </p>
      </div>

      {isLoading && <Loading />}

      {error && <p className="error">{error}</p>}

      {!isLoading && !error && (
        <>
          <div className="pokemon-grid">
            {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>

          <Pagination
            page={page}
            hasPrevious={previousUrl !== null}
            hasNext={nextUrl !== null}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </>
      )}
    </section>
  );
}

export default PokedexPage;