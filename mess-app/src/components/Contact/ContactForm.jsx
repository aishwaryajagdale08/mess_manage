import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (

    <div className="contact-container">
        <div className='bg_image'>
            
        </div>
        <div className="contact-form">
            <h2>Contact Us</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="contact"
                placeholder="Your Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
}

export default ContactForm