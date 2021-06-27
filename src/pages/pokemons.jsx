import React from "react";
import PokemonsList from "../components/pokemonsList";
import { useQuery } from "@apollo/client";
import { POKEMONS_LIST } from "../services/gqlService";
export default function Pokemons() {
  const { loading, error, data } = useQuery(POKEMONS_LIST, {
    variables: { nb_elements: 20 },
  });

  if (loading) return <p>Loading ..</p>;

  if (error) return <p>Error </p>;
  return <PokemonsList data={data.pokemons} />;
}
