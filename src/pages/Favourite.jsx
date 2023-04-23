import React, { useContext, useState } from "react";
import Header from "../components/Header";
import searchTermContext from "../context/searchTermContext";
import favimg from "../assets/favimg.png";
import Stats from "./Stats";
import Moves from "./Moves";
import Forms from "./Forms";

const Favourite = () => {
  const { favPokemon, removeFavoritePokemon, setShow } =
    useContext(searchTermContext);
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (id) => {
    setShowDetails((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <>
      <Header />
      <div className="card-group">
        {favPokemon.length > 0 &&
          favPokemon.map((pokemon) => {
            const { id, name, sprites } = pokemon;
            const isShowDetails = showDetails[id];
            return (
              <div className="card" key={id}>
                <div
                  className={
                    isShowDetails ? "favcard-expand" : "favcard-retend"
                  }
                >
                  <h1>{name}</h1>
                  <img
                    className="poke-img"
                    src={sprites.other.home.front_default}
                    alt="poke-img"
                  />
                  <button onClick={() => removeFavoritePokemon(pokemon, id)}>
                    <img
                      className="toogle-img"
                      src={favimg}
                      alt="remove-favorite"
                    />
                  </button>
                  <button onClick={() => toggleDetails(id)} className="btn">
                    {isShowDetails
                      ? "click to hide details"
                      : "click for details"}
                  </button>
                  {isShowDetails && (
                    <>
                      <Stats />
                      <Moves />
                      <Forms />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        {favPokemon.length === 0 && <p>No favorite Pokemon found!</p>}
      </div>
    </>
  );
};

export default Favourite;
