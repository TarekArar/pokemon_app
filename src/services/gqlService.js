import { gql } from "@apollo/client";

const POKEMONS_LIST = gql`
  query Pokemons($nb_elements: Int!) {
    pokemons(first: $nb_elements) {
      name
      image
    }
  }
`;

const SINGLE_POKEMON = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      name
      image
      classification
      maxHP
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
    }
  }
`;

export { POKEMONS_LIST, SINGLE_POKEMON };
