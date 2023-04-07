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
    datasets: [
      {
        label: "HP",
        data: [],
      },
      {
        label: "Attack",
        data: [],
      },
      {
        label: "Defense",
        data: [],
      },
      {
        label: "Special Attack",
        data: [],
      },
      {
        label: "Special Defense",
        data: [],
      },
      {
        label: "Speed",
        data: [],
      },
    ],
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
      console.log(newlabels);
      console.log(newData);
      setPokeData({
        labels: newlabels[0],
        datasets: [
          {
            label: comparePokemon[0].name,
            data: newData[0],
          },
          {
            label: comparePokemon[1].name,
            data: newData[1],
          },
        ],
      });
    }
  }, [selectedPokemon, comparePokemon]);

  return (
    <div>
      <Header />
      {selectedPokemon ? (
        <div>
          <h2>{selectedPokemon.name}: Stats </h2>
          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />
          <Chart data={pokeData} />
        </div>
      ) : (
        <p>No pokemon found.</p>
      )}
      {comparePokemon.length > 0 ? (
        <div>
          <h2>Compare Pokemon</h2>
          <img
            src={comparePokemon[0].sprites.front_default}
            alt={comparePokemon[0].name}
          />
        </div>
      ) : (
        <>nothing to compare</>
      )}
    </div>
  );
};

export default Compare;
