import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <img src="./images/logo.webp" alt="Crest Bank Logo" className="logo" />
        <h1>Contact Crest Bank</h1>
        <p>We’d love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? Our team is here to help. Reach
            out through the form or use the contact details below.
          </p>
          <ul>
            <li><strong>Address:</strong> 123 Crest Avenue, Financial City, USA</li>
            <li><strong>Email:</strong> support@crestbank.com</li>
            <li><strong>Phone:</strong> +1 800 123 4567</li>
            <li><strong>Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Subject:</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
