import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid library
import './Alert.css';

const Button = ({ children, onClick }) => {
    return (
        <button
            className="submitbtn"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function JobForm({ onAdd }) {
    const [formData, setFormData] = useState({ company: "", jobListing: "", applyDate: "" });
    const [showOverlay, setShowOverlay] = useState(false); // State to control overlay visibility

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        const jobId = uuidv4();
        const jobWithId = { ...formData, id: jobId };
        onAdd(jobWithId);
        setFormData({ company: "", jobListing: "", applyDate: "" });
        setShowOverlay(true); // Show the overlay after submitting the form
    }

    const closeOverlay = () => {
        setShowOverlay(false); // Function to close the overlay
    }

    return (
        <Container className="container-tracker">
            <form onSubmit={submitHandler}>
                <input className="listing" type="text" name="company" value={formData.company} onChange={changeHandler} placeholder="Company" />
                <input className="listing" type="url" name="jobListing" value={formData.jobListing} onChange={changeHandler} placeholder="Job URL" />
                <input className="listing" type="date" name="applyDate" value={formData.applyDate} onChange={changeHandler} placeholder="Date Applied" />
                <br />
                <Button className="submitbtn">Submit Job</Button>
            </form>
            {showOverlay && (
                <div className="overlay-container">
                    <div className="alert-box">
                        <p className="message">Your job has been submitted!</p>
                        <button className="close-button" onClick={closeOverlay}>Close</button>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default JobForm;