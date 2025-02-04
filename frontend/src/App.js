// App.js
import React from 'react';
import JobSearch from './pages/JobSearch';
import SearchResults from './pages/SearchResults';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<JobSearch />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;