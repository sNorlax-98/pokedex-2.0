import React from 'react';
import { useState } from 'react';
import searchTermContext from './searchTermContext';
const SearchState = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [comparePokemon,setComparePokemon] = useState([]);
    let favPokemon = [];


    function clearComparePokemon(){
        setComparePokemon([])
        console.log(comparePokemon)
    }

    function addFavoritePokemon(pokemon){
        setFavPokemon((prevFavPokemon) => [...prevFavPokemon,pokemon])
        console.log(favPokemon)
    }
    function removeFavoritePokemon(id){
        setFavPokemon((prevFavPokemon) => [...prevFavPokemon,id])
        console.log(favPokemon)
    }


    return (
        <searchTermContext.Provider value={{searchTerm,setSearchTerm,comparePokemon,setComparePokemon,clearComparePokemon,favPokemon,addFavoritePokemon,removeFavoritePokemon}}>
            {props.children}
        </searchTermContext.Provider>
    );
}

export default SearchState;
