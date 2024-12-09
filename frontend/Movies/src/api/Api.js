import React from "react";
const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json;
  return data.results;
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await res.json;
  return data.results;
};
/*export const addFavorite = async (account_id) => {
  const res = await fetch(`${url}/account/account_id?api_key=${API_KEY}`);
  const data = await res.json;
  return data.results;
};*/
