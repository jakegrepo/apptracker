import React, { useState } from 'react';
import { Container } from 'react-bootstrap';


export function JobForm({ onAdd }) { // Destructure onAdd directly from props
    const [formData, setFormData] = useState({ company: "", jobListing: "", applyDate: "" });
    const [message, setMessage] = useState('');

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        onAdd(formData); // Call onAdd directly
        setFormData({ company: "", jobListing: "", applyDate: "" });
        setMessage('Job has been added to your tracker! View "Tracker" tab');
        console.log("Job Added");
                // Clear the message after 3 seconds (3000 milliseconds)
                setTimeout(() => {
                    setMessage('');
                }, 6000);
            
    }

    return (
        <Container className="container-tracker">
            <div className="Form">
                <form onSubmit={submitHandler}>
                    <input className="listing" type="text" name="company" value={formData.company} onChange={changeHandler} placeholder="Company" />
                    <input className="listing" type="url" name="jobListing" value={formData.jobListing} onChange={changeHandler} placeholder="Job URL" />
                    <input className="listing" type="date" name="applyDate" value={formData.applyDate} onChange={changeHandler} placeholder="Date Applied" />
                    <br></br><button className="title">Submit Job</button>
                </form>
                {message && <h1 className="jobadd">{message}</h1>}
            </div>
        </Container>
    );
}

export default JobForm;