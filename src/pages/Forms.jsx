import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import searchTermContext from "../context/searchTermContext";
import "./Pages.css";
import open from "../assets/open.png";
import close from "../assets/close.png";

const Forms = () => {
  const { searchTerm, capitaliseFirstLetter } = useContext(searchTermContext);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  useEffect(() => {
    const handleFormsSearch = () => {
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

    handleFormsSearch();
  }, [searchTerm]);

  return (
    <div className={show ? "on" : "off"}>
      <div className="accordian-off " onClick={() => handleShow()}>
        {show ? (
          <>
            <span>Forms </span>
            <img className="open-pokeball" src={close} />
          </>
        ) : (
          <>
            <span>Forms </span> <img className="open-pokeball" src={open} />
          </>
        )}
      </div>
      {show && <h1 className="forms-h1">Forms</h1>}
      {show && (
        <div className="so">
          {selectedPokemon &&
            selectedPokemon.forms.map((e) => (
              <h6 key={e.name}>{capitaliseFirstLetter(e.name)}</h6>
            ))}
        </div>
      )}
    </div>
  );
};

export default Forms;
