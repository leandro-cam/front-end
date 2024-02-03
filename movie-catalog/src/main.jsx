import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { Movie } from "./pages/Movie.jsx";
import { Search } from "./pages/Search.jsx";
import { SearchGenre } from "./pages/SearchGenre.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/front-end">
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
          <Route path="search-genre" element={<SearchGenre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
