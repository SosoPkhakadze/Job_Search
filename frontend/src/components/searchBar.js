// SearchBar.js
import React, { useState } from 'react';
import '../SearchBar.css';


const SearchBar = ({ onJobSearch, onLocationSearch, onSearchSubmit }) => {
  const [jobInput, setJobInput] = useState('');
  const [locationInput, setLocationInput] = useState('');

  const handleJobInputChange = (event) => {
    setJobInput(event.target.value);
    onJobSearch(event.target.value);
  };

  const handleLocationInputChange = (event) => {
    setLocationInput(event.target.value);
    onLocationSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Job title, keywords..."
          value={jobInput}
          onChange={handleJobInputChange}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Location..."
          value={locationInput}
          onChange={handleLocationInputChange}
          className="search-input"
        />
      </div>
      <button type="submit" className="search-button">
        <i className="fas fa-search"></i> Search
      </button>
    </form>
  );
};

export default SearchBar;