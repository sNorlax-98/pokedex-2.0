import React from "react";
import { useContext, useState } from "react";
import Header from "../components/Header";
import searchTermContext from "../context/searchTermContext";
import favimg from "../assets/favimg.png";
import Stats from "./Stats";
import Moves from "./Moves";
import Forms from "./Forms";
const Favourite = () => {
  const [showdDetails, setShowDetails] = useState(false);
  const {
    favPokemon,
    setfavPokemon,
    show,
    removeFavoritePokemon,
    setShow,
    selectedPokemon,
  } = useContext(searchTermContext);
  return (
    <>
      <div className="fav-tab">
        <Header />
        {show
          ? favPokemon.map((pokemon) => {
              return (
                <div className="card-group">
                  <div
                    className={
                      showdDetails ? "favcard-expand" : "favcard-retend"
                    }
                  >
                    <h1>{pokemon.name}</h1>
                    <img
                      src={pokemon.sprites.other.home.front_default}
                      alt="poke-img"
                    />
                    <button
                      onClick={() => {
                        setShow(false);
                        removeFavoritePokemon(pokemon, pokemon.id);
                      }}
                    >
                      <img className="toogle-img" src={favimg} />
                    </button>
                    {showdDetails ? (
                      <button
                        onClick={() => setShowDetails(!showdDetails)}
                        className="btn"
                      >
                        click to hide details
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowDetails(!showdDetails)}
                        className="btn "
                      >
                        click for details
                      </button>
                    )}

                    {showdDetails ? (
                      <>
                        <Stats />
                        <Moves />
                        <Forms />
                      </>
                    ) : null}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Favourite;
