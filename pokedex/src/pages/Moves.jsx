import React from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import searchTermContext from "../context/searchTermContext";
const Moves = () => {
  const { searchTerm, capitaliseFirstLetter } = useContext(searchTermContext);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  useEffect(() => {
    const handleMovesSearch = () => {
      if (!searchTerm) {
        return;
      }
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
        .then((response) => {
          setSelectedPokemon(response.data);
        })
        .catch((error) => {
          setSelectedPokemon(null);
        });
    };
    handleMovesSearch();
  }, []);
  return (
    <div className={show ? "on" : "off"}>
      <div className="accordian-off" onClick={() => handleShow()}>
        {show ? (
          <>
            <span>moves </span>
            <span>-</span>
          </>
        ) : (
          <>
            <span>Moves </span> <span>+</span>
          </>
        )}
      </div>
      {show && <h1 className="moves-h1">Moves</h1>}
      {show && (
        <div className="mo">
          {selectedPokemon &&
            selectedPokemon.moves.map((e) => {
              return (
                <h6 className="moves-box" key={e.move.name}>
                  {capitaliseFirstLetter(e.move.name) + " "}
                </h6>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Moves;
