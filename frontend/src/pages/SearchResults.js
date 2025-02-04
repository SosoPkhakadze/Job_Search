import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../components/searchBar';
import JobModal from '../components/JobModal';
import '../SearchResults.css';

const SearchResults = ({ onJobSearch, onLocationSearch }) => { // Receive onJobSearch and onLocationSearch as props
  const location = useLocation();
  const navigate = useNavigate();
  const searchResults = location.state?.searchResults || [];
  const [showJobModal, setShowJobModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobQuery, setJobQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const query = `${jobQuery} ${locationQuery}`.trim();
        const response = await fetch(`http://127.0.0.1:8000/api/search-jobs/?q=${encodeURIComponent(query)}&page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          navigate('/search-results', { state: { searchResults: data.data } });
          setTotalPages(data.num_pages);
        } else {
          console.log('No search results found');
        }
      } catch (error) {
        console.error(error);
      }
    };

    handleSearch();
  }, [jobQuery, locationQuery, currentPage, navigate]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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

  const showJobDetails = (job) => {
    setSelectedJob(job);
    setShowJobModal(true);
  };

  const closeJobModal = () => {
    setShowJobModal(false);
    setSelectedJob(null);
  };

  return (
    <div className="search-results-container">
      <SearchBar
        onJobSearch={setJobQuery}
        onLocationSearch={setLocationQuery}
        onSearchSubmit={handleSearch}
      />
      <h1 className="search-results-heading">Search Results</h1>
      {searchResults.length === 0 ? (
        <p className="no-results">No search results found.</p>
      ) : (
        <div className="job-list">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="job-card"
              onClick={() => showJobDetails(result)}
            >
              <h2 className="job-title">{result.job_title}</h2>
              <p className="company-name">{result.employer_name}</p>
              {result.salary && <p className="salary">Salary: {result.salary}</p>}
              <p className="job-type">Job Type: {result.job_employment_type}</p>
              <p className="job-location">
                Location: {result.job_city}, {result.job_state}
              </p>
              <p className="job-publisher">Publisher: {result.job_publisher}</p>
            </div>
          ))}
        </div>
      )}
      {showJobModal && <JobModal job={selectedJob} onClose={closeJobModal} />}
    
      <div className="pagination">
  <button
    onClick={handlePrevPage}
    disabled={currentPage === 1}
    className="pagination-button"
  >
    Previous
  </button>
  <span className="pagination-info">
    Page {currentPage} of {totalPages}
  </span>
  <button
    onClick={handleNextPage}
    disabled={currentPage === totalPages}
    className="pagination-button"
  >
    Next
  </button>
</div>

    </div>
  );
};

export default SearchResults;