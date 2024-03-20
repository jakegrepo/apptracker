import React, { useState } from 'react';
import { Container } from 'react-bootstrap';


export function JobForm({ onAdd }) { // Destructure onAdd directly from props
    const [formData, setFormData] = useState({ company: "", jobListing: "", applyDate: "" });
    

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        onAdd(formData); // Call onAdd directly
        setFormData({ company: "", jobListing: "", applyDate: "" });
    }

    return (
        <Container className="container-tracker">
            <h1 className="applicationTracker">Application Tracker</h1>
            <div className="Form">
                <form onSubmit={submitHandler}>
                    <input className="listing" type="text" name="company" value={formData.company} onChange={changeHandler} placeholder="Company" />
                    <input className="listing" type="url" name="jobListing" value={formData.jobListing} onChange={changeHandler} placeholder="Job URL" />
                    <input className="listing" type="date" name="applyDate" value={formData.applyDate} onChange={changeHandler} placeholder="Date Applied" />
                    <button className="title">Submit Job</button>
                </form>
            </div>
        </Container>
    );
}

export default JobForm;