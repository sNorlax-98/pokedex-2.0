import React from 'react';
import { useContext } from 'react';
import Header from '../components/Header';
import './Pages.css'
import axios from 'axios';
import searchTermContext from '../context/searchTermContext';
const Home = () => {
    const [selectedPokemon, setSelectedPokemon] = React.useState(null);
    let {searchTerm, setSearchTerm} = useContext(searchTermContext);
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
      
    return (
        <div>
            <Header/>
            <div className='search'>
            <input className='input' type="text" value={searchTerm} onChange={e=>{setSearchTerm(e.target.value)}} />
            <button className='btn' onClick={handleSearch}>Search</button>
            </div>
            {selectedPokemon ?
            <div className='card'>
          <img className='poke-img img-front' src={selectedPokemon.sprites.front_shiny} alt={selectedPokemon.name} />
          <img className='poke-img img-back' src={selectedPokemon.sprites.front_shiny} alt={selectedPokemon.name} />
        </div> :
        null
      }
        </div>
    );
}

export default Home;
