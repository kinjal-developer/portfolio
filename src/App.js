import React, { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'https://omdbapi.com?apikey=fe2f6c44';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovies('SpiderMan');
  }, []);

  // Filter movies based on the query if query length is 3 or more
  const filteredMovies = query.length >= 3
    ? movies.filter((movie) =>
        movie.Title.toLowerCase().includes(query.toLowerCase())
      )
    : movies;

  return (
    <div className="app">
      <h1>Task</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for Movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
          alt="search icon"
          onClick={() => searchMovies(query)}
        />
      </div>

      {filteredMovies?.length > 0 ? (
        <div className="container">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;



