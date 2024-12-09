import { createContext, useState, useContext, useEffect } from "react";

const Favorites = createContext();

export const useFavorites = () => useContext();

export const FavoritesProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("favs");
    if (stored) setFavs(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const addFav = (movie) => {
    setFavs((prev) => [...prev, movie]);
  };

  const removeFav = (id) => {
    setFavs((prev) => prev.filter((movie) => movie.id !== id));
  };
  const isFav = (id) => {
    return favs.some((movie) => movie.id === id);
  };

  const value = {
    favs,
    addFav,
    removeFav,
    isFav,
  };
  return <Favorites.Provider value={value}>{children}</Favorites.Provider>;
};
