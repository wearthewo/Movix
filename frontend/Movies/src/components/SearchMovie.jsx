import React from "react";
import Movie from "./Movie";
import { getMovies, searchMovies } from "../api/Api";
import { useState, useEffect } from "react";

const SearchMovie = ({ searchQuery, handleSubmit, setSearchQuery }) => {
  //const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleSubmit();
  }, [searchQuery]);

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Searching ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase.startsWith(searchQuery) && (
                <Movie movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
