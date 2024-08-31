import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12c form-section">
                    <div className="form-div">
                    <form>
                        <h2 className="label-field">Name:</h2>
                        <input placeholder="Enter your name" className="field" type="text" required></input>
                        <h2 className="label-field">Email:</h2>
                        <input placeholder="Enter your email" className="field" type="email" required></input>
                        <h2 className="label-field">Description:</h2>
                        <textarea placeholder="What are your requests?" className="field field-textarea" required></textarea>
                        <button className="btn btn-info" type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
