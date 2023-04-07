import React from 'react';
import { useContext } from 'react';
import Header from '../components/Header';
import './Pages.css'
import axios from 'axios';
import searchTermContext from '../context/searchTermContext';
const Home = () => {
    const {comparePokemon,setComparePokemon,clearComparePokemon} = useContext(searchTermContext);
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
      const handleCompare = () => {
        if (!searchTerm || !selectedPokemon) {
          return;
        }
        setComparePokemon(prevComparePokemon => [...prevComparePokemon, selectedPokemon]);
        console.log(comparePokemon);
        console.log(comparePokemon.length);
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
          <button onClick={handleCompare} >add to compare </button>
          <button onClick={clearComparePokemon} > clear compare list </button>
        </div> :
        null
      }
      <div>
      <div>
            <ul>Name: 
          {comparePokemon && comparePokemon.map(e=>{return <li key={e.name} >{e.name}</li>})}
            </ul>
            </div>
      </div>
        </div>
    );
}

export default Home;
