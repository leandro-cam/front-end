import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { MoviesContainer } from "../components/MoviesContainer";

import "./MovieGrid.css";
import { GENRE_IN_PORTUGUESE_TO_GENRE_ID } from "../constants/constants";

const TMDB_API_DISCOVER_URL = import.meta.env.VITE_TMDB_API_DISCOVER_URL;
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const SearchGenre = () => {
  const [searchParams] = useSearchParams();
  const genres = searchParams.get("genres");
  const [foundMovies, setFoundMovies] = useState([]);

  const getMoviesByGenres = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setFoundMovies(data.results);
  };

  useEffect(() => {
    if (!genres) return;

    const genresId = genres
      .split(",")
      .map((genreName) => GENRE_IN_PORTUGUESE_TO_GENRE_ID[genreName]);
    const searchMoviesByGenresUrl = `${TMDB_API_DISCOVER_URL}?api_key=${TMDB_API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&with_genres=${genresId}`;

    getMoviesByGenres(searchMoviesByGenresUrl);
  }, [genres]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para:{" "}
        <span className="search-text">{genres.replaceAll(",", " + ")}</span>
      </h2>
      <MoviesContainer movies={foundMovies} />
    </div>
  );
};
