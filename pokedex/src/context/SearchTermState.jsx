import React from 'react';
import { useState } from 'react';
import searchTermContext from './searchTermContext';
const SearchState = (props) => {

    const [searchTerm, setSearchTerm] = useState('snorlax')




    return (
        <searchTermContext.Provider value={{searchTerm,setSearchTerm}}>
            {props.children}
        </searchTermContext.Provider>
    );
}

export default SearchState;
