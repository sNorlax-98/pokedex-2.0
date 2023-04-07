import React from 'react';
import { useState } from 'react';
import searchTermContext from './searchTermContext';
const SearchState = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [comparePokemon,setComparePokemon] = useState([]);


    function clearComparePokemon(){
        setComparePokemon([])
        console.log(comparePokemon)
    }




    return (
        <searchTermContext.Provider value={{searchTerm,setSearchTerm,comparePokemon,setComparePokemon,clearComparePokemon}}>
            {props.children}
        </searchTermContext.Provider>
    );
}

export default SearchState;
