import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Forms from './pages/Forms';
import Moves from './pages/Moves';
import Stats from './pages/Stats';
import Compare from './pages/Compare';
import React from 'react';
import SearchTermState from './context/SearchTermState';



function App() {
  return (
    <SearchTermState>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/forms" element={<Forms/>} />
      <Route path="/moves" element={<Moves/>} />
      <Route path="/stats" element={<Stats/>} />
      <Route path="/compare" element={<Compare/>} />
    </Routes>
    </BrowserRouter>
    </SearchTermState>
  );
}

export default App;