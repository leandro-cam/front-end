import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BiCameraMovie, BiSearchAlt2, BiX } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

import { GENRE_IN_PORTUGUESE_TO_GENRE_ID } from "../constants/constants";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?s=${search}`);

    setSearch("");
  };

  const GenreButton = ({ genreName }) => {
    const isSelectedGenre = selectedGenres.includes(genreName);
    const onSelect = (genreName) => {
      setSelectedGenres([...selectedGenres, genreName]);
    };
    const onDeselect = (genreName) => {
      const updatedGenres = selectedGenres.filter(
        (genre) => genre !== genreName
      );
      setSelectedGenres(updatedGenres);
      if (!updatedGenres.length) navigate(`/`);
    };

    return (
      <button
        className={`genre-button ${isSelectedGenre ? "selected-genre" : ""}`}
        onClick={
          isSelectedGenre
            ? () => onDeselect(genreName)
            : () => onSelect(genreName)
        }
      >
        {genreName}
        {isSelectedGenre && <BiX />}
      </button>
    );
  };

  GenreButton.propTypes = {
    genreName: PropTypes.string.isRequired,
  };

  useEffect(() => {
    if (!selectedGenres.length) return;
    navigate(`/search-genre?genres=${selectedGenres.join()}`);
  }, [selectedGenres]);

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Movie Catalog
        </Link>
      </h2>

      <div className="genres">
        {Object.keys(GENRE_IN_PORTUGUESE_TO_GENRE_ID).map((genreName) => (
          <GenreButton key={genreName} genreName={genreName} />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};
