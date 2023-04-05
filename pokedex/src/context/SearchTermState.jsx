import React from 'react';
import { useState } from 'react';
import searchTermContext from './searchTermContext';
const SearchState = (props) => {

    const [searchTerm, setSearchTerm] = useState('snorlax')
    const [comparePokemon,setComparePokemon] = useState(null);




    return (
        <searchTermContext.Provider value={{searchTerm,setSearchTerm,comparePokemon,setComparePokemon}}>
            {props.children}
        </searchTermContext.Provider>
    );
}

export default SearchState;
