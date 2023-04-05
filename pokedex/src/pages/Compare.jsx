import React, { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import searchTermContext from '../context/searchTermContext';
import axios from 'axios';

const Compare = () => {
  const { searchTerm, setSearchTerm, comparePokemon, setComparePokemon } = useContext(searchTermContext);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSearch = () => {
    if (!searchTerm) {
      return;
    }
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then(response => {
        setSelectedPokemon(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
        setSelectedPokemon(null);
      });
  }

  useEffect(() => {
    const handleCompareSearch = () => {
      if (!comparePokemon) {
        return;
      }
      const pokemonName = comparePokemon.name ? comparePokemon.name.toLowerCase() : "";
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
          setComparePokemon(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
          setComparePokemon(null);
        });

    }
    handleCompareSearch();
  }, [comparePokemon]);

  return (
    <div>
      <Header />
      <h1>Compare</h1>
      <input className='input' type="text" value={searchTerm} onChange={e => { setSearchTerm(e.target.value) }} />
      <button className='btn' onClick={handleSearch}>Search</button>
      {selectedPokemon ?
        <div className='card'>
          <img className='poke-img img-front' src={selectedPokemon.sprites.front_shiny} alt={selectedPokemon.name} />
          <img className='poke-img img-back' src={selectedPokemon.sprites.front_shiny} alt={selectedPokemon.name} />
        </div> :
        null
      }
        {comparePokemon ?
        <div className='card'>
            <img className='poke-img img-front' src={comparePokemon.sprites.front_shiny} alt={comparePokemon.name} />
            <img className='poke-img img-back' src={comparePokemon.sprites.front_shiny} alt={comparePokemon.name} />
        </div> :
        null
        }
    </div>
  );
}

export default Compare;
