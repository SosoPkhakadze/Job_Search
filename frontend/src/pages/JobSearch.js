// JobSearch.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/searchBar';
import '../JobSearch.css';

const JobSearch = () => {
  const navigate = useNavigate();
  const [jobQuery, setJobQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const handleSearch = async () => {
    try {
      const query = `${jobQuery} ${locationQuery}`.trim();
      const response = await fetch(`http://127.0.0.1:8000/api/search-jobs/?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        navigate('/search-results', { state: { searchResults: data.data } });
      } else {
        console.log('No search results found');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="job-search-container">
      <h1 className="job-search-heading">Job Search </h1>
      <SearchBar
        onJobSearch={setJobQuery}
        onLocationSearch={setLocationQuery}
        onSearchSubmit={handleSearch}
      />
    </div>
  );
};

export default JobSearch;