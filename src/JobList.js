import React, { useState, useEffect } from 'react';

function JobList({ updateAllJobs }) {
    const [allJobs, setAllJobs] = useState([]);

    // Load data from localStorage when the component mounts
    useEffect(() => {
        const savedJobs = JSON.parse(localStorage.getItem('jobs'));
        if (savedJobs) {
            setAllJobs(savedJobs);
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    function removeJob(jobToRemove) {
        const updatedJobs = allJobs.filter(job => job.jobListing !== jobToRemove.jobListing);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        setAllJobs(updatedJobs);
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
                    <button onClick={() => removeJob(j)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
              }

export default JobList;