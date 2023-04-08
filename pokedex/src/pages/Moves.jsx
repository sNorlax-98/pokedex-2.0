import React from 'react';
import { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import searchTermContext from '../context/searchTermContext';
const Moves = () => {
    const { searchTerm } = useContext(searchTermContext);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [show , setShow] = useState(false);
    function handleShow(){
        setShow(!show);
    }
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
            { show && <h1>Moves</h1>}
           { show && <ul>
                {selectedPokemon && selectedPokemon.moves.map(e=>{return <li key={e.move.name} >{e.move.name}</li>})}
            </ul>
}
<button className='moves-btn' onClick={()=>handleShow()} > {show? "Hide moves": "Show Moves"}</button>
        </div>
    );
}

export default Moves;
