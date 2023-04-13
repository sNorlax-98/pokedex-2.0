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
    console.log(comparePokemon);
  }

  function addFavoritePokemon(pokemon) {
    setFavPokemon((prevFavPokemon) => [...prevFavPokemon, pokemon]);
    console.log(favPokemon);
  }
  function removeFavoritePokemon(id) {
    setFavPokemon((prevFavPokemon) => {
      const newFavPokemon = prevFavPokemon.filter(
        (pokemon) => pokemon.id === id
      );
      console.log(newFavPokemon);
      return newFavPokemon;
    });
    console.log(favPokemon);
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
