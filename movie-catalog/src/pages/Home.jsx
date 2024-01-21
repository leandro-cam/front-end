import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

const TMDB_API_URL = import.meta.env.VITE_TMDB_API_URL;
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const getTopMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topMoviesUrl = `${TMDB_API_URL}/top_rated?api_key=${TMDB_API_KEY}`;
    getTopMovies(topMoviesUrl);
  }, []);

  const MoviesContainer = () => {
    const isLoading = topMovies.length === 0;

    return (
      <div className="movies-container">
        {isLoading && <p>Carregando...</p>}
        {!isLoading &&
          topMovies.map((movie) => (
            <p key={movie.id}>
              <MovieCard movie={movie} />
            </p>
          ))}
      </div>
    );
  };

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <MoviesContainer />
    </div>
  );
};
