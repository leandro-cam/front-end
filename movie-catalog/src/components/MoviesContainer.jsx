import PropTypes from "prop-types";

import { MovieCard } from "./MovieCard";

export const MoviesContainer = ({ movies }) => {
  const isLoading = !movies.length;

  return (
    <div className="movies-container">
      {isLoading && <p className="loading">Carregando...</p>}
      {!isLoading &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

MoviesContainer.propTypes = {
  movies: PropTypes.array.isRequired,
};
