import React, { useEffect } from 'react';
import '../JobModal.css';

const JobModal = ({ job, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector('.job-modal-content');
      if (modal && !modal.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="job-modal">
      <div className="job-modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2 className="job-title">{job.job_title}</h2>
        <p className="company-name">{job.employer_name}</p>
        {job.salary && <p className="salary">Salary: {job.salary}</p>}
        <p className="job-type">Job Type: {job.job_employment_type}</p>
        <p className="job-location">
          Location: {job.job_city}, {job.job_state}
        </p>
        <p className="job-publisher">Publisher: {job.job_publisher}</p>
        <a
          href={job.job_apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="apply-link"
        >
          Apply on Website
        </a>
        <p className="job-description">Description: {job.job_description}</p>
      </div>
    </div>
  );
};

export default JobModal;