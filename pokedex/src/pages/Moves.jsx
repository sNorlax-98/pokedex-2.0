import React from 'react';
import { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import searchTermContext from '../context/searchTermContext';
const Moves = () => {
    const { searchTerm } = useContext(searchTermContext);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    useEffect(() => {
        const handleMovesSearch = () => {
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
        handleMovesSearch();
        
    }, []);
    return (
        <div>
            <Header/>
            <h1>Moves</h1>
            <ul>
                {selectedPokemon && selectedPokemon.moves.map(e=>{return <li>{e.move.name}</li>})}
            </ul>
            
        </div>
    );
}

export default Moves;
