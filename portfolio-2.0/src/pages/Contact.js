import React from 'react';
import '../styles/styles.css';

function Contact() {
    return (
        <div className="projects-section bg-dark">
            <h2 className="text-white mb-4 headingCon">Reach Out</h2>
            <div className="container text-white py-4">

                <form id="contactForm">


                    <div className="mb-3">
                        <label className="form-label" for="name">Name</label>
                        <input className="form-control" id="name" type="text" placeholder="Name" />
                    </div>


                    <div className="mb-3">
                        <label className="form-label" for="emailAddress">Email Address</label>
                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                    </div>


                    <div className="mb-3">
                        <label className="form-label" for="message">Message</label>
                        <textarea className="form-control" id="message" type="text" placeholder="Message"></textarea>
                    </div>


                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default Contact;