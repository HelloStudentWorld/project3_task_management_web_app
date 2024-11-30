import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwdvja");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Me</h2>
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text" 
        name="name"
        className="form-input"
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="form-input"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="form-textarea"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="form-button">
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
