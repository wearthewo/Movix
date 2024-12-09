import React from "react";
import Movie from "./Movie";
import SearchMovie from "./SearchMovie";
import { getMovies, searchMovies } from "../api/Api";
import { useState, useEffect } from "react";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const allMovies = await getMovies();
        setMovies(allMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      setError(null);
    } catch (err) {
      setError("Failed searching movies");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <div className="home">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
          <SearchMovie
            searchQuery={searchQuery}
            handleSubmit={handleSubmit}
            setSearchQuery={setSearchQuery}
          />
        </div>
      )}
    </div>
  );
};

export default Movies;
