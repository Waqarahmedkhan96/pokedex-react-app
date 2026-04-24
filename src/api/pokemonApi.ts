import type { PokemonDetail, PokemonListResponse } from "../types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(
  limit: number,
  offset: number
): Promise<PokemonListResponse> {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon list");
  }

  return response.json();
}

export async function getPokemonDetails(name: string): Promise<PokemonDetail> {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }

  return response.json();
}