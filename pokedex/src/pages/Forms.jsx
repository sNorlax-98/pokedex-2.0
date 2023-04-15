import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import searchTermContext from "../context/searchTermContext";
import "./Pages.css";

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
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          setSelectedPokemon(null);
        });
    };

    handleFormsSearch();
  }, [searchTerm]);

  return (
    <div className={show ? "forms" : "formsoff"}>
      <div className="accordian-off moves_off" onClick={() => handleShow()}>
        {show ? (
          <>
            <span>Forms </span>
            <span>-</span>
          </>
        ) : (
          <>
            <span>Forms </span> <span>+</span>
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
