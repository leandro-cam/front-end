import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const TMDB_MOVIE_IMG_URL = import.meta.env.VITE_TMDB_MOVIE_IMG_URL;

export const MovieCard = ({ movie, showLink }) => {
  return (
    <div className="movie-card">
      <img
        src={`${TMDB_MOVIE_IMG_URL}/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  showLink: PropTypes.bool,
};

MovieCard.defaultProps = {
  showLink: true,
};
