import PropTypes from 'prop-types'

import { MovieCard } from "./MovieCard";

export const MoviesContainer = ({topMovies}) => {
  const isLoading = topMovies.length === 0;

  return (
    <div className="movies-container">
      {isLoading && <p>Carregando...</p>}
      {!isLoading &&
        topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

MoviesContainer.propTypes = {
  topMovies: PropTypes.array.isRequired
}
