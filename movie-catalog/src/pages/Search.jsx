import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';

import { MoviesContainer } from '../components/MoviesContainer';

import './MovieGrid.css'

const TMDB_API_SEARCH_URL = import.meta.env.VITE_TMDB_API_SEARCH_URL
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const Search = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('s')
  const [foundMovies, setFoundMovies] = useState([]);

  const getMoviesBySearch = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setFoundMovies(data.results);
  };

  useEffect(() => {
    if (!search) return;

    const searchMoviesUrl = `${TMDB_API_SEARCH_URL}?api_key=${TMDB_API_KEY}&query=${search}`;
    getMoviesBySearch(searchMoviesUrl);
  }, [search]);

  return (<div className="container">
    <h2 className="title">
      Resultados para: <span className="search-text">{search}</span>
    </h2>
    <MoviesContainer movies={foundMovies} />
  </div>);
};
