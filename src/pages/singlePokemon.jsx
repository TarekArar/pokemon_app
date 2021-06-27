import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { SINGLE_POKEMON } from "../services/gqlService";
import { Link } from "react-router-dom";
export default function SinglePokemon() {
  let { name } = useParams();
  const { loading, error, data } = useQuery(SINGLE_POKEMON, {
    variables: { name },
  });

  if (loading) return <p>Loading ..</p>;

  if (error) return <p>Error </p>;
  const { pokemon } = data;

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Link to="/">Home</Link>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>
        Hey Takwa It's {pokemon.name}, tarek told me that he loves you too much,
        take care of yourself and be happy{" "}
      </h2>
      <div>
        <p>Classification: {pokemon.classification}</p>
        <p>maxHP: {pokemon.maxHP}</p>
        <h3>Attacks:</h3>
        <h4>Fast:</h4>
        <ul>
          {pokemon.attacks.fast.map(({ name }, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
        <h4>Special:</h4>
        <ul>
          {pokemon.attacks.special.map(({ name }, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
