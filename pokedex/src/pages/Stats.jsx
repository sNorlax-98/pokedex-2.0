import React from "react";
import Header from "../components/Header";
import { useContext, useState, useEffect } from "react";
import searchTermContext from "../context/searchTermContext";
import axios from "axios";
import Chart from "../components/Chart";

const Stats = () => {
  const { searchTerm } = useContext(searchTermContext);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
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
          setSelectedPokemon(null);
        });
    };

    handleStatsSearch();
  }, [selectedPokemon]);

  useEffect(() => {
    if (selectedPokemon) {
      const newlabels = selectedPokemon.stats.map((stat) => stat.stat.name);
      const newData = selectedPokemon.stats.map((stat) => stat.base_stat);
      setPokeData({
        labels: [
          newlabels[0],
          newlabels[1],
          newlabels[2],
          newlabels[3],
          newlabels[4],
          newlabels[5],
        ],
        datasets: [
          {
            label: searchTerm,
            data: [
              newData[0],
              newData[1],
              newData[2],
              newData[3],
              newData[4],
              newData[5],
            ],
          },
        ],
      });
    }
  }, [selectedPokemon]);

  return (
    <div className={show ? "on" : "off"}>
      <div className="accordian-off " onClick={() => handleShow()}>
        {show ? (
          <>
            <span>Stats </span>
            <span>-</span>
          </>
        ) : (
          <>
            <span>Stats </span> <span>+</span>
          </>
        )}
      </div>
      {show && selectedPokemon ? (
        <div>
          <Chart data={pokeData} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Stats;
