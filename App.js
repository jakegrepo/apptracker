import './Styles/App.css';
import React, { useState, useEffect } from 'react';
import { UserProvider, useUser } from './src/Components/UserContext';
import { getRandomGreeting } from './src/Components/Greetings';
import JobTracker from './src/Components/JobTracker';
import JobList from './src/Components/JobList';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Navbar from './src/Components/Navbar';
import Footer from './src/Components/Footer';

function TitleName() {
  const [title, setTitle] = useState("Howdy");
  const [isIntervalActive, setIsIntervalActive] = useState(true);
  const [button, setButton] = useState("Pause");
  const { user } = useUser();

  useEffect(() => {
    let intervalId;
    if (isIntervalActive) {
      intervalId = setInterval(updateTitle, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isIntervalActive]);

  function updateTitle() {
    setTitle(getRandomGreeting());
  }

  function handleButtonClick() {
    setIsIntervalActive(!isIntervalActive);
  }

  return (
    <div>
      <h1 className="titlename">{title}
      </h1>
    </div>
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
        <Route path="/home" element={<React.Fragment><TitleName /><JobTracker onAdd={addJob} /></React.Fragment>} />
        <Route path="/tracker" element={<JobList allJobs={allJobs} updateAllJobs={updateAllJobs} />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </UserProvider>
    <Footer /></div>
    
  );
  }
export default App;