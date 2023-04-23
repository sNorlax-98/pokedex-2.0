import React from "react";
import { useState } from "react";
import searchTermContext from "./searchTermContext";
const SearchState = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [comparePokemon, setComparePokemon] = useState([]);
  const [favPokemon, setFavPokemon] = useState([]);
  const [show, setShow] = React.useState(false);

  function clearComparePokemon() {
    setComparePokemon([]);
  }

  function addFavoritePokemon(pokemon) {
    setFavPokemon((prevFavPokemon) => {
      if (prevFavPokemon.some((p) => p.id === pokemon.id)) {
        return prevFavPokemon;
      } else {
        return [...prevFavPokemon, pokemon];
      }
    });
  }

  function removeFavoritePokemon(pokemon) {
    setFavPokemon((prevFavPokemon) => {
      const newFavPokemon = prevFavPokemon.filter((d) => d.id !== pokemon.id);
      return newFavPokemon;
    });
  }

  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <searchTermContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        comparePokemon,
        setComparePokemon,
        clearComparePokemon,
        favPokemon,
        setFavPokemon,
        addFavoritePokemon,
        removeFavoritePokemon,
        show,
        setShow,
        capitaliseFirstLetter,
      }}
    >
      {props.children}
    </searchTermContext.Provider>
  );
};

export default SearchState;
