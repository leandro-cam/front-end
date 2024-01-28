import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsWallet2,
  BsGraphUp,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import { MovieCard } from "../components/MovieCard";

import "./Movie.css";

const TMDB_API_URL = import.meta.env.VITE_TMDB_API_URL;
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatNumberToDollar = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${TMDB_API_URL}/${id}?api_key=${TMDB_API_KEY}`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <div className="movie-detail">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false}></MovieCard>
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 />
              Orçamento:
            </h3>
            <p>{formatNumberToDollar(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp />
              Faturamento:
            </h3>
            <p>{formatNumberToDollar(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit />
              Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill />
              Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};
