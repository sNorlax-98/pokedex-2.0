import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import searchTermContext from "../context/searchTermContext";
import "./Pages.css";

const Forms = () => {
  const { searchTerm } = useContext(searchTermContext);
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
    <div>
      {show && <h1>Forms</h1>}
      {show && (
        <ul>
          {selectedPokemon &&
            selectedPokemon.forms.map((e) => <li key={e.name}>{e.name}</li>)}
        </ul>
      )}
      <button className="forms-btn" onClick={() => handleShow()}>
        {" "}
        {show ? "Hide forms" : "Show forms"}{" "}
      </button>
    </div>
  );
};

export default Forms;
