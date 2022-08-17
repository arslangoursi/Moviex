import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "../src/search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=a4855f58";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [movies, setMovies] = useState("");

  const movieSearch = async (Title) => {
    const response = await fetch(`${API_URL}&s=${Title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    movieSearch("Mission impossible");
  }, []);

  return (
    <div className="main__container">
      <div className="app__name">Moviex</div>
      <div className="app__search">
        <input
          placeholder="Search here"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => movieSearch(searchWord)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="movies__data">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="no__data">No movies found</div>
      )}
    </div>
  );
}

export default App;
