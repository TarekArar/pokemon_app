import React from "react";

export default function PokemonCard({ name, imageURI }) {
  return (
    <div style={{ border: "2px solid green" }}>
      <h3>{name}</h3>
      <img src={imageURI} alt="pokemon" />
      <h4>Tarek Loves You</h4>
    </div>
  );
}
