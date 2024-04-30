import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., sending data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // You can send this data to a server for processing
    // Reset the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            value={message}
            onChange={handleMessageChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
