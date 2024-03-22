import './App.css';
import React, { useState, useEffect } from 'react';
import { UserProvider, useUser } from './UserContext';
import JobTracker from './JobTracker';
import JobList from './JobList';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const TitleName = () => {
  return (
    <h1 className="titlename">Track Your Future, <br></br>One Application at a Time!</h1>
  );
}

const App = () => {
  const [allJobs, updateAllJobs] = useState([]);

  function addJob(jobListing) {
    const updatedJobs = [...allJobs, jobListing];
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    updateAllJobs(updatedJobs); // Invoking updateAllJobs with updatedJobs
}

  return (
    <div className="container-background">
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<React.Fragment><TitleName/><JobTracker onAdd={addJob} /></React.Fragment>} />
        <Route path="/tracker" element={<JobList allJobs={allJobs} updateAllJobs={updateAllJobs} />} />
      </Routes>
    </UserProvider>
    <Footer /></div>
    
  );
  }
export default App;