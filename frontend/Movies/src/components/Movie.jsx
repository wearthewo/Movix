import React from "react";
import { useFavorites } from "../context/Favorites";

const Movie = ({ movie }) => {
  const [isFav, addFav, removeFav] = useFavorites();
  const fav = isFav(movie.id);
  const handleFav = (e) => {
    e.preventDefault();
    if (fav) removeFav(movie.id);
    else addFav(movie);
  };
  return (
    <div className="movie">
      <div className="movie-img">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        ></img>
        <div className="button">
          <button
            className={`fav-btn ${fav ? "active" : ""}`}
            onClick={handleFav}
          >
            Favorite
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default Movie;
