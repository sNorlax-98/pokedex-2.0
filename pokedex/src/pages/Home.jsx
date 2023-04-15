import React from "react";
import { useContext } from "react";
import Header from "../components/Header";
import "./Pages.css";
import axios from "axios";
import searchTermContext from "../context/searchTermContext";
import Stats from "../pages/Stats";
import Moves from "../pages/Moves";
import Forms from "../pages/Forms";
import favimg from "../assets/favimg.png";
import notfav from "../assets/notfav.png";
const Home = () => {
  const {
    comparePokemon,
    setComparePokemon,
    clearComparePokemon,
    addFavoritePokemon,
    removeFavoritePokemon,
    show,
    setShow,
  } = useContext(searchTermContext);
  const [selectedPokemon, setSelectedPokemon] = React.useState(null);
  let { searchTerm, setSearchTerm } = useContext(searchTermContext);
  const handleSearch = () => {
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

  const handleCompare = () => {
    if (!searchTerm || !selectedPokemon) {
      return;
    }
    setComparePokemon((prevComparePokemon) => [
      ...prevComparePokemon,
      selectedPokemon,
    ]);
    console.log(comparePokemon);
    console.log(comparePokemon.length);
  };
  return (
    <div>
      <Header />
      <div className="home">
        <input
          className="input-field"
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {selectedPokemon ? (
        <div className="card-div">
          <div className="img-div">
            <img
              className=""
              src={selectedPokemon.sprites.other.home.front_default}
              alt={selectedPokemon.name}
            />
            {show ? (
              <button
                className=""
                onClick={() => {
                  setShow(false);
                  removeFavoritePokemon(selectedPokemon, selectedPokemon.id);
                }}
              >
                <img className="tooglebtn-img" src={favimg} />
              </button>
            ) : (
              <button
                className=""
                onClick={() => {
                  setShow(true);
                  addFavoritePokemon(selectedPokemon, selectedPokemon.id);
                }}
              >
                <img className="tooglebtn-img" src={notfav} />
              </button>
            )}
          </div>
          <div className="custom-div">
            <Stats />
            <Moves />
            <Forms />
          </div>
          <div className="comparison-div">
            <div className="comparison-control">
              <button className="compare-btn btn" onClick={handleCompare}>
                Compare
              </button>
              <button className="clear-btn btn" onClick={clearComparePokemon}>
                clear
              </button>
            </div>
            <div className="compare-div">
              {comparePokemon.length > 0 && (
                <ul className="">
                  Comparison list:
                  {comparePokemon &&
                    comparePokemon.map((e) => {
                      return <li key={e.id}>{e.name}</li>;
                    })}
                </ul>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
