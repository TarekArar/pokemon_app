import React from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./pokemonCard";
export default function PokemonsList({ data }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {data.map((pokemon, idx) => (
        <Link key={idx} to={`/${pokemon.name}`}>
          <PokemonCard name={pokemon.name} imageURI={pokemon.image} />
        </Link>
      ))}
    </div>
  );
}
