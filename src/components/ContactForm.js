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
    <form className="contact-form" onSubmit={handleSubmit}>
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
  );
}

export default ContactForm;
