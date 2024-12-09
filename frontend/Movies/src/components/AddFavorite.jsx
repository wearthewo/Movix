import React from "react";
import NavBar from "./NavBar";
import { useFavorites } from "../context/Favorites";
import Movie from "./Movie";

const AddFavorite = () => {
  const { favs } = useFavorites();
  if (favs) {
    return (
      <div className="favorites">
        <NavBar />
        <h2>List of favorites</h2>
        <div className="movies-grid">
          {favs.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favs-empty">
      <h2>You have no favorite movie</h2>
      <p>Click the heart button to add your favorite movies</p>
    </div>
  );
};

export default AddFavorite;
