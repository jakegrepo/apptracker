import React, { useState, onClick } from 'react';
import { Container } from 'react-bootstrap';
import './Alert.css';


export function JobForm({ onAdd }) { // Destructure onAdd directly from props
    const [formData, setFormData] = useState({ company: "", jobListing: "", applyDate: "" });
    const [message, setMessage] = useState('');
    const [showOverlay, setShowOverlay] = useState(false);

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        onAdd(formData);
        setFormData({ company: "", jobListing: "", applyDate: "" });
        setShowOverlay(true); // Show the overlay after submitting the form
        console.log("Job Added");
        setTimeout(() => { setMessage(''); }, 6000);
    }

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

    function closeOverlay() {
        // Get the overlay container element
        var overlay = document.querySelector('.overlay-container');
        
        // Remove the overlay from the DOM
        overlay.parentNode.removeChild(overlay);
    }


      const Alert = ({ children }) => {
        return (
            <>
            <div classNAme="Overlay"/>
            <div className="Alert">{children}</div>
            </>
        )
        }
    return (
        <Container className="container-tracker">
            <div className="Form">
                <form onSubmit={submitHandler}>
                    <input className="listing" type="text" name="company" value={formData.company} onChange={changeHandler} placeholder="Company" />
                    <input className="listing" type="url" name="jobListing" value={formData.jobListing} onChange={changeHandler} placeholder="Job URL" />
                    <input className="listing" type="date" name="applyDate" value={formData.applyDate} onChange={changeHandler} placeholder="Date Applied" />
                    <br></br>
                    <Button backgroundColor="#09459D" color="black">Submit Job</Button>
                </form>
                </div>
            {showOverlay && (
                <div className="overlay-container">
                    <div className="alert-box">
                        <p className="message">Your job has been moved to the Tracker.</p>
                        <button className="close-button" onClick={() => setShowOverlay(false)}>Close</button>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default JobForm;