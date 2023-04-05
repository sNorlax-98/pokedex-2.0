import React from 'react';
import Header from '../components/Header';
import { useContext, useState, useEffect } from 'react';
import searchTermContext from '../context/searchTermContext';
import axios from 'axios';
const Stats = () => {
    const { searchTerm } = useContext(searchTermContext);
const [selectedPokemon, setSelectedPokemon] = useState(null);
useEffect(() => {
    const handleStatsSearch = () => {
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

    handleStatsSearch();
}, []);
    return (
        <div>
            <Header/>
            <h1>Stats</h1>
            <ul>
                {selectedPokemon && selectedPokemon.stats.map(e=>{return <li>{e.stat.name}</li>})}
                </ul>
        </div>
    );
}

export default Stats;
