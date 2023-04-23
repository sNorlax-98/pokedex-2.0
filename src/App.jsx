import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Compare from "./pages/Compare";
import React from "react";
import SearchTermState from "./context/SearchTermState";

function App() {
  return (
    <SearchTermState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </BrowserRouter>
    </SearchTermState>
  );
}

export default App;
