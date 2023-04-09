import React from "react";
import { useContext } from "react";
import Header from "../components/Header";
import searchTermContext from "../context/searchTermContext";
import favimg from "../assets/favimg.png";
const Favourite = () => {
  const {
    favPokemon,
    setfavPokemon,
    show,
    removeFavoritePokemon,
    setShow,
    selectedPokemon,
  } = useContext(searchTermContext);
  return (
    <div>
      <Header />
      ✨Favourite✨
      {show
        ? favPokemon.map((pokemon) => {
            return (
              <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt="poke-img" />
                <button
                  onClick={() => {
                    setShow(false);
                    removeFavoritePokemon(pokemon, pokemon.id);
                  }}
                >
                  <img src={favimg} />
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Favourite;
