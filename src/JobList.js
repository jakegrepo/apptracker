import React, { useState, useEffect } from 'react';
import './Alert.css';


const Button = ({ children, backgroundColor, color, onClick }) => {
  return (
      <button
          style={{
          backgroundColor,
          color,
          }}
          onClick={onClick}
      >
          {children}
      </button>
  );
}

function RemoveConfirmation({ onCancel, onConfirm }) {
    return (
        <div className="overlay-container">
            <div className="confirmation-box">
                <p>Are you sure you want to remove this job?</p>
                <Button onClick={onConfirm} backgroundColor="red">Remove</Button>
                <Button onClick={onCancel}backgroundColor="#09459D">Keep</Button>
            </div>
        </div>
    );
}

function JobList({ updateAllJobs }) {
    const [allJobs, setAllJobs] = useState([]);
    const [jobToRemove, setJobToRemove] = useState(null);

    // Load data from localStorage when the component mounts
    useEffect(() => {
        const savedJobs = JSON.parse(localStorage.getItem('jobs'));
        if (savedJobs) {
            setAllJobs(savedJobs);
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    function removeJob() {
        const updatedJobs = allJobs.filter(job => job.jobListing !== jobToRemove.jobListing);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        setAllJobs(updatedJobs);
        setJobToRemove(null); // Reset jobToRemove after removing the job
    }

    return (
        <div className="container-jobs">
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allJobs.map((j) => (
                        <tr key={j.jobListing}>
                            <td>
                                <a href={j.jobListing} className="companyLink" target="_blank">{j.company}</a>
                            </td>
                            <td>{j.applyDate}</td>
                            <td>
                                <button onClick={() => setJobToRemove(j)} className="action">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {jobToRemove && (
                <RemoveConfirmation
                    onCancel={() => setJobToRemove(null)}
                    onConfirm={removeJob}
                />
            )}
        </div>
    );
}

export default JobList;