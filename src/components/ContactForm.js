import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', form);
    // Reset form
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      comments: ''
    });
  };

  return (
    <div>
      <h1 className="page-title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="instructions">
          <h3>How to Use This Contact Form</h3>
          <ul>
            <li>Fill in your name in the Name field</li>
            <li>Provide a valid email address</li>
            <li>Write your message in the Message field</li>
            <li>All fields are required</li>
            <li>Click Submit to send your message</li>
          </ul>
        </div>
        <label>
          First Name:
          <input 
            type="text" 
            name="firstName" 
            value={form.firstName} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Last Name:
          <input 
            type="text" 
            name="lastName" 
            value={form.lastName} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Comments:
          <textarea 
            name="comments" 
            value={form.comments} 
            onChange={handleChange} 
            required 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
