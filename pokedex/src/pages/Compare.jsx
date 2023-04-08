import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import searchTermContext from "../context/searchTermContext";
import axios from "axios";
import Chart from "../components/Chart";

const Compare = () => {
  const { searchTerm } = useContext(searchTermContext);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { comparePokemon, setComparePokemon } = useContext(searchTermContext);
  const [pokeData, setPokeData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const handleStatsSearch = () => {
      if (!searchTerm) {
        return;
      }
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
        .then((response) => {
          setSelectedPokemon(response.data);
        })
        .catch((error) => {
          console.log(error);
          setSelectedPokemon(null);
        });
    };

    handleStatsSearch();
  }, [searchTerm]);

  useEffect(() => {
    if (selectedPokemon) {
      const newlabels = comparePokemon.map((d) =>
        d.stats.map((stat) => stat.stat.name)
      );
      const newData = comparePokemon.map((d) =>
        d.stats.map((stat) => stat.base_stat)
      );
      const newDatasets = comparePokemon.map((pokemon, index) => {
        return {
          label: pokemon.name,
          data: newData[index]
        };
      });

      setPokeData({
        labels: newlabels[0],
        datasets: newDatasets
      });
    }
  }, [selectedPokemon, comparePokemon]);

  return (
    <div>
      <Header />
      {comparePokemon.length > 0 ? (
        <div>
          <h2>Compare Pokemon</h2>
          {comparePokemon.map((pokemon, index) => (
            <div key={index}>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </div>
          ))}
          <Chart data={pokeData}/>
        </div>
      ) : (
        <>nothing to compare</>
      )}
    </div>
  );
};

export default Compare;
